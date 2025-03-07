import os
from flask import Flask, flash, redirect, render_template, request, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
#from config import Config
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required

app = Flask(__name__)

db_url = os.getenv("DATABASE_URL")
if db_url:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://", 1)
else:
    raise ValueError("DATABASE_URL is not set")

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

app.config["SESSION_TYPE"] = "sqlalchemy"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_SQLALCHEMY"] = db
app.config["SESSION_SQLALCHEMY_TABLE"] = "sessions"

Session(app)

maps_api_key = os.environ.get("MAPS_API_KEY", "")
if not maps_api_key:
    print("Warning: MAPS_API_KEY is not set.")

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    hashcode = db.Column(db.String(255), nullable=False)
    score = db.Column(db.Integer, default=0)

with app.app_context():
    db.create_all()
    db.session.commit()


@app.route("/", methods=["GET", "POST"])
@login_required
def index():
    
    user_id = session["user_id"]

    cur_score = users.query.filter_by(id=user_id).first().score or 0


    username = users.query.filter_by(id=user_id).first().username or "Unknown"


    topscores = users.query.order_by(users.score.desc()).limit(10).all()


    return render_template("index.html", username=username, score=cur_score, topscores=topscores)


@app.route("/register", methods=["GET", "POST"])
def register():
    # Forget any user_id
    session.clear()

    if request.method == "GET":
        return render_template("register.html")

    else:
        username = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")
        score = 0

        if username == "":
            error_msg = "Enter a valid username."
            return render_template("register.html", error=error_msg)
        elif password == "":
            error_msg = "Enter a valid password."
            return render_template("register.html", error=error_msg)
        elif confirmation == "":
            error_msg = "Enter a valid password."
            return render_template("register.html", error=error_msg)
        elif password != confirmation:
            error_msg = "Passwords don't match."
            return render_template("register.html", error=error_msg)

        
        # Query database for username
        existing_user = users.query.filter_by(username=username).first()


        # Ensure username exists and password is correct
        if existing_user:
            error_msg = "User already exists."
            return render_template("register.html", error=error_msg)
        
        new_user = users(username=username, hashcode=generate_password_hash(password), score=0)
        db.session.add(new_user)
        db.session.commit()

        session["user_id"] = new_user[0]

        db.session.commit()

        # Remember which user has logged in
        session["user_id"] = new_user.id
       

        # Redirect user to home page
        return redirect("/")


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        # Ensure username was submitted
        if not username:
            error_msg = "Enter a valid username."
            return render_template("login.html", error=error_msg)

        # Ensure password was submitted
        elif not password:
            error_msg = "Enter a valid password."
            return render_template("login.html", error=error_msg)

        # Query database for user
        existing_user = users.query.filter_by(username=username).first()


        # Ensure user exists and password is correct
        if not existing_user or not check_password_hash(existing_user.hashcode, password):
            return render_template("login.html", error="Incorrect username or password.")

        # Remember which user has logged in
        session["user_id"] = existing_user.id

        # Redirect to homepage
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/normal", methods=["GET", "POST"])
@login_required
def normal():

    user_id = session["user_id"]
    
    cur_score = users.query.filter_by(id=user_id).first().score or 0

    username = users.query.filter_by(id=user_id).first().username or "Unknown"

    if request.method == "GET":
        return render_template("normal.html", username=username, score=cur_score, maps_api_key=maps_api_key)

    else:
        try:
            new_score = int(request.form.get("scoretext", 0))
        except ValueError:
            return render_template("normal.html", username=username, score=cur_score, error="Invalid score input.")
        
        score = max(0, cur_score + new_score)

        
        user = users.query.filter_by(id=user_id).first()
        if user:
            user.score = score
            db.session.commit()

    return render_template("normal.html", username=username, score=score, maps_api_key=maps_api_key)


@app.route("/difficult", methods=["GET", "POST"])
@login_required
def difficult():

    user_id = session["user_id"]
    
    cur_score = users.query.filter_by(id=user_id).first().score or 0

    username = users.query.filter_by(id=user_id).first().username or "Unknown"


    if request.method == "GET":
        return render_template("difficult.html", username=username, score=cur_score, maps_api_key=maps_api_key)

    else:
        try:
            new_score = int(request.form.get("scoretext", 0))
        except ValueError:
            return render_template("difficult.html", username=username, score=cur_score, error="Invalid score input.")
        
        score = max(0, cur_score + new_score)

        
        user = users.query.filter_by(id=user_id).first()
        if user:
            user.score = score
            db.session.commit()

    return render_template("difficult.html", username=username, score=score, maps_api_key=maps_api_key)
