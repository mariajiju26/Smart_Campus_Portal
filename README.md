Project Description
The Smart Campus Portal is a digital platform designed to modernize campus resource management. It integrates two critical services—an AI-powered Lost & Found system and an Event Venue Booking module—into a single, user-friendly interface. By leveraging TensorFlow.js for visual matching and Node.js for real-time data handling, the portal eliminates manual paperwork, improves item recovery rates, and simplifies the reservation of seminar halls and classrooms for students and staff.

Tech Stack List
Frontend: HTML5, CSS3, and JavaScript (ES6+).
Backend: Node.js and Express.js.
Database: MongoDB Community Server.
AI Engine: TensorFlow.js (MobileNet model).
Version Control: Git and GitHub Desktop.

Features List
AI Visual Matching: Uses TensorFlow.js and MobileNet to automatically match found item images with lost item descriptions.

Integrated Dashboard: A central hub to navigate between Lost & Found and Venue Booking services.

Real-Time Reporting: Users can instantly report lost or found items with categories, locations, and descriptions.

Venue Management: Check availability and book campus halls or classrooms through a digital interface.

Persistent Database Storage: All user reports, bookings, and account data are saved securely in MongoDB.

Secure Authentication: Personal accounts with login and signup functionality to protect user privacy.

Installation Commands
According to your project requirements and the setup shown in your terminal, follow these steps to install all necessary components:

1. Database Setup (MongoDB)
   Download: Install MongoDB Community Server from the official website.

Tools: Download MongoDB Compass to visually manage your databases.

Service: Ensure the MongoDB service is running on localhost:27017.

2. Backend Environment (Node.js)
   Install Node.js: Download and install the LTS version of Node.js (which includes npm) from nodejs.org.

Verify Installation:

Bash
node -v
npm -v 3. Project Dependencies
Open your terminal in the project root folder (where package.json is located) and run the following to install all required packages:

Bash

# Initialize npm (if not already done)

npm init -y

# Install core backend packages

npm install express mongoose cors 4. Frontend Requirements
VS Code Extension: Install the Live Server extension in VS Code to host your HTML files locally.

AI Libraries: The project uses TensorFlow.js, which is loaded via CDN in your HTML files, so no local npm install is required for the AI engine.

Run Commands
To start the Smart Campus Portal locally, follow these steps in order:

Start MongoDB: Ensure the MongoDB service is running on your machine (default port: 27017).

Open Terminal: In VS Code, open the integrated terminal in your project's root folder.

Run the Backend:
Bash
node server.js
Success Check: You should see "Server running at http://localhost:3000" and "Connected to MongoDB Database!".

Launch the Frontend:

Right-click index.html in the VS Code file explorer.

Select "Open with Live Server".

The app will open in your browser (usually at http://127.0.0.1:5500).

Screenshots
