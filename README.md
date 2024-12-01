# Netflix Clone (MERN)

A full-stack Netflix clone application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project mimics the core functionality of Netflix, including user authentication, movie browsing, and streaming capabilities, providing a great learning experience in building a scalable and interactive web application.

# Usage
   ```bash
  User Registration and Login:
    Create an account and log in with secure credentials.
  Explore Movies:
    Browse the movie catalog and view detailed information.
  Search and Filter:
    Search for specific movies or TV shows and filter by genre.
  Add to Favorites:
    Save your favorite movies for easy access.
  Admin Features:
    (Optional) Manage content and user data via an admin interface.

# Features

- **User Authentication**: Secure login and registration using JWT and bcrypt.
- **Browse and Search**: Explore movies and TV shows by categories and genres.
- **Dynamic UI**: Interactive design with a Netflix-inspired interface.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Favorites**: Add or remove movies from a personalized favorites list.
- **Playback Simulation**: Simulated streaming with movie trailers or placeholder content.
- **Admin Panel**: Manage users, movies, and categories (if implemented).

# Technologies Used

# Frontend
- **React.js**: Dynamic and component-based user interface.
- **React Router**: Client-side routing for seamless navigation.
- **Axios**: Simplified HTTP requests to the backend.
- **CSS/SCSS**: Netflix-like styling.

# Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Lightweight backend framework for API routes.
- **JWT (JSON Web Tokens)**: Secure token-based authentication.
- **bcrypt**: Password encryption.

# Database
- **MongoDB**: NoSQL database for scalable data storage.
- **Mongoose**: MongoDB object data modeling (ODM).

# Installation

Follow these steps to set up and run the project locally.

# Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community) locally or use a MongoDB Atlas cluster.

# Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mohan7401647399/Netflix_clone_MERN.git

2. Navigate to the project directory:
   ```bash
   cd Netflix_clone_MERN

3. Install dependencies:
   ```bash
     For the server:
      cd server
      npm install

   For the Client:
     cd client
     npm install

4. Configure environment variables:
  Create a .env file in the server directory with the following:
  ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

5. Run the application:
    Start the backend:
  ```bash
    cd server
    npm run dev
   Start the frontend:
     cd client
    npm start

6. Open your browser and go to:
```bash
  http://localhost:3000
