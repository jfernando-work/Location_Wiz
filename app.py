import os

#from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required

# from dotenv import load_dotenv
# load_dotenv()

app = Flask(__name__)

#for sqlite db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mapgame.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

maps_api_key = os.environ.get("MAPS_API_KEY")
db = "sqlite:///mapgame.db"


@app.route("/", methods=["GET", "POST"])
@login_required
def index():

    user_id = session["user_id"]
    cur_score = db.execute("SELECT score FROM users WHERE id = ?", user_id)[0]["score"]
    username = db.execute("SELECT username FROM users WHERE id = ?", user_id)[0]["username"]

    topscores = db.execute("SELECT username, score FROM users ORDER BY score DESC LIMIT 10")

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
        rows = db.execute("SELECT * FROM users WHERE username = ?", username)

        # Ensure username exists and password is correct
        if len(rows) != 0:
            error_msg = "User already exists."
            return render_template("register.html", error=error_msg)
        elif len(rows) == 0:
            db.execute("INSERT INTO users (username, hashcode, score) VALUES(?, ?, ?)", username, generate_password_hash(password), score)

        rows = db.execute("SELECT * FROM users WHERE username = ?", username)

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
        rows = db.execute("SELECT * FROM users WHERE username = ?", username)

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
    cur_score = db.execute("SELECT score FROM users WHERE id = ?", user_id)[0]["score"]
    username = db.execute("SELECT username FROM users WHERE id = ?", user_id)[0]["username"]

    if request.method == "GET":
        return render_template("normal.html", username=username, score=cur_score, maps_api_key=maps_api_key)

    else:
        new_score = int(request.form.get("scoretext"))
        score = cur_score + new_score

        if score <= 0:
            score = 0

        db.execute("UPDATE users SET score = ? WHERE id = ?", score, user_id)
        return render_template("normal.html", username=username, score=score, maps_api_key=maps_api_key)


@app.route("/difficult", methods=["GET", "POST"])
@login_required
def difficult():

    user_id = session["user_id"]
    cur_score = db.execute("SELECT score FROM users WHERE id = ?", user_id)[0]["score"]
    username = db.execute("SELECT username FROM users WHERE id = ?", user_id)[0]["username"]

    if request.method == "GET":
        return render_template("difficult.html", username=username, score=cur_score, maps_api_key=maps_api_key)

    else:
        new_score = int(request.form.get("scoretext"))
        score = cur_score + new_score

        if score <= 0:
            score = 0

        db.execute("UPDATE users SET score = ? WHERE id = ?", score, user_id)
        return render_template("difficult.html", username=username, score=score, maps_api_key=maps_api_key)
