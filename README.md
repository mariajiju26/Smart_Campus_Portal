Smart Campus Portal

Team Name:Final Commit

Team Members
Member 1: Maria Eliza Jiju (Mar Athanasius College of Engineering Kothamangalam)
Member 2: Sreelakshmi Sukumaran (Mar Athanasius College of Engineering Kothamangalam)

Hosted Project Link
https://smart-campus-portal-cael-davwlp6d2-mariajiju26s-projects.vercel.app/

Project Description
A dual-purpose campus utility platform that integrates an AI-powered Lost & Found system with a Digital Venue Booking interface. It streamlines campus resource management and item recovery using real-time data processing.

The Problem Statement
Manual lost and found processes on campus are slow and often fail to match items efficiently. Additionally, booking campus facilities like halls or classrooms usually involves tedious paperwork or fragmented communication.

The Solution
A unified web portal where **TensorFlow.js** automates item matching via visual recognition, and a centralized dashboard allows users to check real-time availability and book campus venues instantly.

Technical Details
Technologies/Components Used
For Software:
Languages used: JavaScript (ES6+), HTML5, CSS3
Frameworks used: Node.js, Express.js
Libraries used: Mongoose, TensorFlow.js, MobileNet model, CORS
Tools used: VS Code, Git, GitHub Desktop, MongoDB Atlas, Render

Features
AI Visual Matching: Automatically matches found item images with lost item descriptions using MobileNet.
Integrated Dashboard: A central hub to navigate between Lost & Found and Venue Booking services.
Real-Time Reporting: Users can instantly report lost or found items with categories and locations.
Venue Management: Check availability and book campus halls or classrooms digitally.

Implementation
1. Database Setup (Cloud)
MongoDB Atlas: Create a free cluster at cloud.mongodb.com.

Network Access: Add 0.0.0.0/0 to the IP Access List to allow Render to connect.

Database User: Create a user (e.g., Maria) and save the password.

URI: Copy the connection string for the Node.js driver.

2. Backend Setup (server.js)
Install dependencies and use the updated environment variable code:

Bash
npm install express mongoose cors
JavaScript
// Use Render's environment variable or local fallback
const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lost_found_db';
const PORT = process.env.PORT || 3000; //
mongoose.connect(dbURI)
    .then(() => console.log(" Connected to MongoDB Atlas!"))
    .catch(err => console.error(" Connection error:", err));
    
3. Frontend Setup
AI Integration: Include TensorFlow.js via CDN in your HTML <head>.
API Calls: Update fetch() URLs in your JavaScript to point to your Render URL instead of localhost:3000.
Live Server: Use the VS Code extension to preview your login.html locally.

4. Deployment (Render)
GitHub: Push all 11 project files using GitHub Desktop.
Web Service: Create a new service on Render with Runtime: Node.
Build/Start: Use npm install and node server.js.
Env Vars: Add MONGO_URI with your Atlas string in the Environment tab.

Screenshots:
<img width="940" height="695" alt="image" src="https://github.com/user-attachments/assets/690f14bb-f0cd-4992-b74a-ef02c93746f1" />
User Authentication: Verifying identity before granting access.
MongoDB Integration: Storing user profiles in the cloud.
Frontend Entry: The login.html file acting as the application start point

<img width="940" height="775" alt="image" src="https://github.com/user-attachments/assets/44f9dc80-8226-4d8c-bc1c-dd06a9c24190" />
Personalized Greeting: Displays a dynamic welcome message for the logged-in user (e.g., "Welcome, maria eliza jiju") to enhance user experience.
Service Selection Cards: Features two distinct modules for primary campus tasks:
Lost & Found: Options to "Report Lost Item" or "View Lost Items" utilizing the integrated AI matching system.
Venue Booking: Direct access to "Book Venue" and "My Bookings" for managing campus facility reservations.
Streamlined Navigation: Includes a prominent "Logout" button for secure session termination.
Modern UI: Uses a clean, vibrant blue gradient background with semi-transparent glassmorphism cards for a professional and contemporary look.

<img width="940" height="961" alt="image" src="https://github.com/user-attachments/assets/e7b63b43-e19f-453e-aa33-b13fd7b2c4d3" />
Purpose: Allows users to submit details about items they have lost or found on campus.
Functionality: Users fill out a form including item name, category, location, and date.
AI Integration: Features a file upload button that triggers TensorFlow.js to automatically recognize and tag the item based on the image provided.

<img width="940" height="961" alt="image" src="https://github.com/user-attachments/assets/6bcdfa5d-e145-442b-93b5-480a19199c1f" />
Purpose: A digital interface for reserving campus facilities such as halls or classrooms.
Functionality: Enables users to check available time slots and submit booking requests for specific campus venues.
Impact: Eliminates manual paperwork and provides a transparent view of campus resource availability.

Architecture Diagram:
<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/9ee55f35-c094-4a8e-939f-6f1a6798ad85" />
The provided diagram illustrates the full-stack workflow of your application, showing how data moves from the user's screen to the cloud database.
User Browser: The entry point where students or faculty interact with the portal using browsers like Chrome or Edge via HTTP requests.
Frontend: Built with HTML, CSS, and JavaScript, this layer handles the visual pages including Login/Signup, the Dashboard, Lost & Found, and Venue Booking.

Backend (API): Powered by Node.js, this layer processes logic through specific endpoints:
/api/signup: Handles new user registration.
/api/book: Manages campus venue reservations.
/api/lostfound: Processes item reports and retrievals.
Database: MongoDB Atlas acts as the cloud storage, organized into three main collections: Users, Bookings, and LostFoundItems.
How it Works
Interaction: The user clicks a button on the Frontend.
Request: An API Call (Fetch/AJAX) is sent to the Node.js Backend.
Data Processing: The backend performs MongoDB Queries to save or retrieve information from Atlas.
Response: The database sends data back through the backend to update the user's browser.
Keywords
Full-Stack: Combined frontend, backend, and database.
Cloud Storage: MongoDB Atlas.
API: The bridge between the interface and the data.





