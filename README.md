
# Study Notion EdTech Platform

EdTech Platform is a comprehensive online education platform designed to offer a seamless learning experience. It supports various user roles, including instructors, admins, and students, allowing each role to interact with the platform in unique ways. With built-in features like course management, payment integration, and dashboards, it’s designed to simplify online learning and teaching.



## Demo

You can explore a live demo of the EdTech Platform to get a firsthand experience of its features.

Live Demo: Demo Link (https://gyandangi-studynotion.vercel.app/)

## Project Sample

Here are some screenshots to give you an overview of the EdTech Platform:

1. Home Page
The landing page showcases the available courses, with options for users to log in, register, and explore popular courses.

2. Instructor Dashboard
Instructors can create new courses, monitor enrollments, and access feedback. This dashboard simplifies course management and enables instructors to track their course impact.

3. Student Dashboard

Students can browse enrolled courses, track progress, and receive personalized recommendations based on completed courses.

4. Payment Gateway

A seamless checkout experience allows students to securely purchase courses. The platform supports multiple payment options, providing flexibility for users.

5. Course Detail Page

Detailed course information is displayed here, including course content, instructor details, and reviews.
## Features
User Roles and Permissions: Separate dashboards and permissions for instructors, admins, and students.

Course Management: Instructors can create, edit, and delete courses, while students can enroll and track progress.
Payment Gateway: Secure payment integration for seamless course purchases.

Dashboard Insights: Track course popularity, enrollment statistics, and revenue generation.

Responsive Design: Optimized for both web and mobile devices.
## Tech Stack

Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Payment Gateway: Razorpay
Deployment: Backend (render) $$ Frontend (vercel)
## Setup and Installation

Clone the Repository:

git clone https://github.com/GyanDangi/EdTech_Platform.git

cd your-repo-name

Install Dependencies:
npm install
cd client
npm install

Install these all dependencies:
"dependencies": {
    "@nestjs/mongoose": "^10.0.10",
    "@ramonak/react-progress-bar": "^5.3.0",
    "@reduxjs/toolkit": "^1.9.7",
    "@smastrom/react-rating": "^1.5.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "bcrypt": "^5.1.1",
    "chart.js": "^4.3.0",
    "copy-to-clipboard": "^3.3.3",
    "mongoose": "^8.7.2",
    "nodemailer": "^6.9.15",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.10",
    "react-hook-form": "^7.53.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.12.0",
    "react-markdown": "^8.0.7",
    "react-otp-input": "^3.1.1",
    "react-rating-stars-component": "^2.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "react-super-responsive-table": "^5.2.1",
    "react-type-animation": "^3.2.0",
    "showdown": "^2.1.0",
    "swiper": "^9.3.1",
    "vercel": "^37.12.0",
    "video-react": "^0.16.0",
    "web-vitals": "^2.1.4"
  },


    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Email setup:
MAIL_HOST=smtp.gmail.com
MAIL_USER=abcd@gmail.com
MAIL_PASS="app passowrd for mail"
JWT_SECRET="your secret"


cloudinary setup : for uploading files
FOLDER_NAME="Gyan"
CLOUD_NAME=dpjjtqzs9
API_KEY=584797745548243
API_SECRET=xxx

RAZORPAY setup:
RAZORPAY_KEY=xxx
RAZORPAY_SECRET=xxx

Satabase setup:
MONGODB_URL="your mongodb MONGODB_URL"
PORT=8080






## How to run the project?

step 01: In terminal go to the server folder-> cd server

Install this all dependencies:
"dependencies": {
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "cloudinary": "^1.41.3",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "crypto-random-string": "^5.0.0",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-fileupload": "^1.5.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.8.2",
    "node-schedule": "^2.1.1",
    "nodemailer": "^6.9.15",
    "nodemon": "^2.0.22",
    "otp-generator": "^4.0.1",
    "razorpay": "^2.9.4",
    "vercel": "^37.12.0"
  },
  "devDependencies": {
    "@babel/plugin-transform-private-property-in-object": "^7.25.8"
  }

step 2: come to the root directory of the project
run this command: npm run dev 

before this make sure you have made changes in script of package.json 
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },

## Package.json file for server

{
  "name": "studynotion-client",
  "description": "This is the client side of the StudyNotion App",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@nestjs/mongoose": "^10.0.10",
    "@ramonak/react-progress-bar": "^5.3.0",
    "@reduxjs/toolkit": "^1.9.7",
    "@smastrom/react-rating": "^1.5.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "bcrypt": "^5.1.1",
    "chart.js": "^4.3.0",
    "copy-to-clipboard": "^3.3.3",
    "mongoose": "^8.7.2",
    "nodemailer": "^6.9.15",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.10",
    "react-hook-form": "^7.53.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.12.0",
    "react-markdown": "^8.0.7",
    "react-otp-input": "^3.1.1",
    "react-rating-stars-component": "^2.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "react-super-responsive-table": "^5.2.1",
    "react-type-animation": "^3.2.0",
    "showdown": "^2.1.0",
    "swiper": "^9.3.1",
    "vercel": "^37.12.0",
    "video-react": "^0.16.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "cd server && npm run dev",
    "dev": "concurrently -n \"client,server\" -c \"bgBlue,bgYellow\" \"npm start\" \"npm run server\""
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-transform-private-property-in-object": "^7.25.8",
    "@ianvs/prettier-plugin-sort-imports": "^3.7.2",
    "concurrently": "^8.0.1",
    "prettier": "^2.8.8",
    "prettier-plugin-tailwindcss": "^0.3.0",
    "tailwindcss": "^3.2.7"
  }
}

## Usage

Admin Dashboard: Manage users, view analytics, and track platform metrics.
Instructor Dashboard: Create, edit, and delete courses. View student enrollment statistics.
Student Dashboard: Browse available courses, enroll, and track learning progress.
## Contact 

For any inquiries, reach out via gyanprakashdangi@gmail.com email.