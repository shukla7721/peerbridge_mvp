import flask 
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Replace with your actual MongoDB URI
client = MongoClient("mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority")
db = client.peerbridge
users_collection = db.users

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')

    if email and email.endswith('@lpu.in'):
        # Check if user already exists
        existing_user = users_collection.find_one({"email": email})
        if not existing_user:
            users_collection.insert_one({"email": email})
        return jsonify({"status": "success", "message": f"Welcome {email}!"})
    
    return jsonify({"status": "error", "message": "Invalid email"}), 400

if __name__ == '__main__':
    app.run(debug=True)