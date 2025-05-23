#necessary imports
import os
from flask import Flask, redirect, render_template, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required

#initialize flask app
app = Flask(__name__)

#configure database connection
db_url = os.getenv("DATABASE_URL")
if db_url:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://", 1)
else:
    raise ValueError("DATABASE_URL is not set")

#configure SQLAlchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#configure flask session
app.config["SESSION_TYPE"] = "sqlalchemy"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_SQLALCHEMY"] = db
app.config["SESSION_SQLALCHEMY_TABLE"] = "sessions"

Session(app)

#grabbing Google API key
maps_api_key = os.environ.get("MAPS_API_KEY", "")
if not maps_api_key:
    print("Warning: MAPS_API_KEY is not set.")

#define db models for Location and users
class Location(db.Model):
    __tablename__ = 'locations'
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Double, nullable=False)
    lng = db.Column(db.Double, nullable=False)
    city = db.Column(db.String(255), nullable=False)
    level = db.Column(db.String(255), nullable=False)

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    hashcode = db.Column(db.String(255), nullable=False)
    score = db.Column(db.Integer, default=0)

#create db tables
with app.app_context():
    db.create_all()
    db.session.commit()

#route for Normal Locations in the game
@app.route('/normal_locations', methods=['GET'])
def get_normal_locations():
    level = "Normal"  
    locations = Location.query.filter_by(level=level).all()

    norm_locations_list = [{"lat": loc.lat, "lng": loc.lng, "city": loc.city} for loc in locations]
    return jsonify(norm_locations_list)

if __name__ == '__main__':
    app.run(debug=True)


#route for Difficult Locations in the game
@app.route('/difficult_locations', methods=['GET'])
def get_difficult_locations():
    level = "Difficult"  
    locations = Location.query.filter_by(level=level).all()

    diff_locations_list = [{"lat": loc.lat, "lng": loc.lng, "city": loc.city} for loc in locations]
    return jsonify(diff_locations_list)

if __name__ == '__main__':
    app.run(debug=True)


#route for the main page
@app.route("/", methods=["GET", "POST"])
@login_required
def index():
    user_id = session["user_id"]
    cur_score = users.query.filter_by(id=user_id).first().score or 0
    username = users.query.filter_by(id=user_id).first().username or "Unknown"
    topscores = users.query.order_by(users.score.desc()).limit(10).all()
    return render_template("index.html", username=username, score=cur_score, topscores=topscores)


#route for registering new users
@app.route("/register", methods=["GET", "POST"])
def register():
    #forget any user_id
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

        #query database for username
        existing_user = users.query.filter_by(username=username).first()

        #make sure username exists and password is correct
        if existing_user:
            error_msg = "User already exists."
            return render_template("register.html", error=error_msg)
        
        new_user = users(username=username, hashcode=generate_password_hash(password), score=0)
        db.session.add(new_user)
        db.session.commit()

        session["user_id"] = new_user.id
        db.session.commit()

        #remember which user has logged in
        session["user_id"] = new_user.id

        #redirect user to home page
        return redirect("/")


#route for user login
@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    #forget any user_id
    session.clear()

    #user reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        #make sure username was submitted
        if not username:
            error_msg = "Enter a valid username."
            return render_template("login.html", error=error_msg)

        #ensure password was submitted
        elif not password:
            error_msg = "Enter a valid password."
            return render_template("login.html", error=error_msg)

        #query database for user
        existing_user = users.query.filter_by(username=username).first()


        #ensure user exists and password is correct
        if not existing_user or not check_password_hash(existing_user.hashcode, password):
            return render_template("login.html", error="Incorrect username or password.")

        #remember which user has logged in
        session["user_id"] = existing_user.id

        #redirect to homepage
        return redirect("/")

    #user reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


#route for user logout
@app.route("/logout")
def logout():
    """Log user out"""

    #forget any user_id
    session.clear()

    #redirect user to login form
    return redirect("/")


#route for Normal Level of the game
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


#route for Difficult Level of the game
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
