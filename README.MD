Express Form Submission Server
This repository contains a simple Express server application for handling form submissions. It includes endpoints for submitting, reading, and deleting form submissions stored in a JSON file (db.json).

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from nodejs.org.

Installing
Clone the repository and install dependencies:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
npm install
Setting Up the Database
Before starting the server, ensure the db.json file exists in the root directory of the project. If it doesn't exist, create an empty db.json file.

Starting the Server
To start the server, run:

bash
Copy code
npm start
The server will start on http://localhost:3000.

API Endpoints
The following endpoints are available:

GET /ping: Checks if the server is running.
POST /submit: Submits a form with JSON data containing Name, Email, Phone, GithubLink, and StopwatchTime.
GET /read?index=<index>: Retrieves a submission by its index in the db.json array.
DELETE /delete?index=<index>: Deletes a submission by its index in the db.json array.
Example Usage
Submit a Form:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"Name":"John Doe","Email":"john@example.com","Phone":"1234567890","GithubLink":"https://github.com/johndoe","StopwatchTime":120}' http://localhost:3000/submit
Read a Submission:

bash
Copy code
curl http://localhost:3000/read?index=0
Delete a Submission:

bash
Copy code
curl -X DELETE http://localhost:3000/delete?index=0
Replace 0 with the index of the submission you want to retrieve or delete.