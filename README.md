[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6i_6NRg9)
﻿![](http://images.restapi.co.za/pvt/Noroff-64.png)
# Noroff
# Back-end Development Year 1
### JavaScript Server - Course Assignment 1 <sup>V2</sup>

Startup code for Noroff back-end development 1 - JavaScript Server course.

Instruction for the course assignment is in the LMS (Moodle) system of Noroff.
[https://lms.noroff.no](https://lms.noroff.no)

![](http://images.restapi.co.za/pvt/ca_important.png)

You will not be able to make any submission after the deadline of the course assignment. Make sure to make all your commit **BEFORE** the deadline

![](http://images.restapi.co.za/pvt/help.png)

If you are unsure of any instructions for the course assignment, contact out to your teacher on **Microsoft Teams**.

**REMEMBER** Your Moodle LMS submission must have your repository link **AND** your Github username in the text file.

# Meme Central

A brief description of your project and what it does. For example:  
"This application provides a user authentication system using PassportJS, enabling secure login functionality with session handling."

---

## Technologies Used

- **JavaScript**: Core programming language for building server-side logic.  
- **Node.js**: Enables JavaScript to be used for server-side development.  
- **Express**: Framework for building web applications and APIs efficiently.  
- **Live-Server**: Provides a development server with live reload capabilities.  
- **HTML5**: Structures the frontend of the application.  
- **CSS3**: Styles the frontend to ensure a responsive and attractive UI.  
- **Git**: Version control system for tracking changes and collaboration.  

---

## Dependencies

To install these dependencies, run `npm install` after cloning the repository. Below is a list of the key dependencies and their purpose:

- **Express**: Framework for handling routes, requests, and middleware.  
  - **Installation**: `npm install express`  

- **Axios**: HTTP client for making requests to external APIs.  
  - **Installation**: `npm install axios`  

- **Bootstrap**: Frontend framework for responsive design.  
  - **Installation**: `npm install bootstrap`  

- **Connect-Ensure-Login**: Middleware to ensure authentication for routes.  
  - **Installation**: `npm install connect-ensure-login`  

- **Cookie-Parser**: Middleware for parsing cookies.  
  - **Installation**: `npm install cookie-parser`  

- **Debug**: Utility for debugging Node.js applications.  
  - **Installation**: `npm install debug`  

- **EJS**: Embedded JavaScript templating for dynamic HTML content.  
  - **Installation**: `npm install ejs`  

- **Express-Session**: Middleware for managing user sessions.  
  - **Installation**: `npm install express-session`  

- **HTTP-Errors**: Simplifies error handling by managing HTTP error objects.  
  - **Installation**: `npm install http-errors`  

- **jQuery**: Simplifies DOM manipulation, events, and AJAX requests.  
  - **Installation**: `npm install jquery`  

- **Morgan**: HTTP request logger middleware.  
  - **Installation**: `npm install morgan`  

- **Passport**: Authentication middleware for user login flows.  
  - **Installation**: `npm install passport`  

- **Passport-Local**: Passport strategy for username/password authentication.  
  - **Installation**: `npm install passport-local`  

- **Request**: Simplified HTTP client (deprecated but still usable).  
  - **Installation**: `npm install request`  

---

## Installation Instructions

1. **Clone the Repository**  
   Run the following command in your terminal:  
   ```bash
   git clone https://github.com/noroff-backend-1/aug24ft-jss-ca-1-JanySalinas.git
   cd aug24ft-jss-ca-1-JanySalinas
   ```

2. **Install Dependencies**  
   Run this command to install all required dependencies:  
   ```bash
   npm install
   ```

3. **Run the Application**  
   If using `live-server`, you can start the application with the following command:  
   ```bash
   live-server
   ```
   Alternatively, if `npm start` is configured in your `package.json`, you can run:  
   ```bash
   npm start
   ```

4. **Access the Application**  
   Open your browser and navigate to:  
   ```
   http://localhost:3000/memes
   ```

---

## Special Notes

- **Environment Variables**: Ensure you have a `.env` file (if applicable) with the necessary environment variables, such as session secrets.  
- **User Authentication**: The application uses a `users.json` file for managing user credentials. Make sure this file is in the correct location.  
- **Troubleshooting**:  
  - If you encounter any issues, check the logs for errors using the `debug` dependency.  
  - Ensure all dependencies are installed by re-running `npm install`.  

---

By following this guide, you should be able to install, configure, and run the application successfully.

# Memes-Central
