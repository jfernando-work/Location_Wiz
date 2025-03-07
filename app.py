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

Session(app)

maps_api_key = os.environ.get("MAPS_API_KEY", "")
if not maps_api_key:
    print("Warning: MAPS_API_KEY is not set.")

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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

    cur_score = db.session.execute(text("SELECT score FROM users WHERE id = :id"), {"id": user_id}).fetchone()[0]
    username = db.session.execute(text("SELECT username FROM users WHERE id = :id"), {"id": user_id}).fetchone()[0]
    topscores = db.session.execute(text("SELECT username, score FROM users ORDER BY score DESC LIMIT 10")).fetchall()

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
        rows = db.session.execute(text("SELECT * FROM users WHERE username = :username"), {"username": username}).fetchall()

        # Ensure username exists and password is correct
        if len(rows) != 0:
            error_msg = "User already exists."
            return render_template("register.html", error=error_msg)
        elif len(rows) == 0:
            db.session.execute(text("INSERT INTO users (username, hashcode, score) VALUES (:username, :hashcode, :score)"),
                {"username": username, "hashcode": generate_password_hash(password), "score": score})
            db.session.commit()

        rows = db.session.execute(text("SELECT * FROM users WHERE username = :username"), {"username": username}).fetchall()

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

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
        if username == "":
            error_msg = "Enter a valid username."
            return render_template("login.html", error=error_msg)

        # Ensure password was submitted
        elif password == "":
            error_msg = "Enter a valid password."
            return render_template("login.html", error=error_msg)

        # Query database for username
        
        rows = db.session.execute(text("SELECT * FROM users WHERE username = :username"), {"username": username}).fetchall()

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hashcode"], password):
            error_msg = "Incorrect password or username."
            return render_template("login.html", error=error_msg)
            
        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
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
    
    cur_score = db.session.execute(text("SELECT score FROM users WHERE id = :id"), {"id": user_id}).fetchone()[0]
    username = db.session.execute(text("SELECT username FROM users WHERE id = :id"), {"id": user_id}).fetchone()[0]

    if request.method == "GET":
        return render_template("normal.html", username=username, score=cur_score, maps_api_key=maps_api_key)

    else:
        new_score = int(request.form.get("scoretext"))
        score = cur_score + new_score

        if score <= 0:
            score = 0

        
        db.session.execute(text("UPDATE users SET score = :score WHERE id = :id"), {"score": score, "id": user_id})
        db.session.commit()

    return render_template("normal.html", username=username, score=score, maps_api_key=maps_api_key)


@app.route("/difficult", methods=["GET", "POST"])
@login_required
def difficult():

    user_id = session["user_id"]
    
    cur_score = db.session.execute(text("SELECT score FROM users WHERE id = :id"), {"id": user_id}).fetchone()[0]
    username = db.session.execute(text("SELECT username FROM users WHERE id = :id"), {"id": user_id}).fetchone()[0]

    if request.method == "GET":
        return render_template("difficult.html", username=username, score=cur_score, maps_api_key=maps_api_key)

    else:
        new_score = int(request.form.get("scoretext"))
        score = cur_score + new_score

        if score <= 0:
            score = 0
        
        db.session.execute(text("UPDATE users SET score = :score WHERE id = :id"), {"score": score, "id": user_id})
        db.session.commit()

        return render_template("difficult.html", username=username, score=score, maps_api_key=maps_api_key)
