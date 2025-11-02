# Fitness Tracker

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for tracking workouts, managing user accounts, and providing fitness tutorials. The app includes user authentication, workout logging, dashboard analytics, and educational content.

## Features

- **User Authentication**: Sign up, sign in, and secure JWT-based authentication
- **Workout Management**: Add, view, and track personal workouts with categories
- **Dashboard**: Visual analytics with charts and statistics
- **Tutorials**: Workout tutorials with professional images for different muscle groups
- **Blogs**: Fitness-related blog posts and articles
- **Contact Page**: Information about the creators
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- Styled Components for styling
- Chart.js for data visualization
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests

### DevOps
- Docker for containerization
- Docker Compose for multi-container setup

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- MongoDB (local or cloud instance)

## Installation

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khatrisomay/FitnessTracker.git
   cd FitnessTracker
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `server` directory with:
   ```
   MONGODB_URL=mongodb://localhost:27017/fitnessdb
   JWT_SECRET=your_jwt_secret_here
   ```

5. **Start MongoDB:**
   Make sure MongoDB is running on your system, or use Docker:
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

6. **Start the application:**
   - Start the server: `cd server && npm start`
   - Start the client: `cd client && npm start`

   The app will be available at `http://localhost:3000` (client) and `http://localhost:8081` (server).

### Docker Deployment

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

   This will start both the app and MongoDB containers. The app will be available at `http://localhost:8081`.

## Usage

1. **Sign Up**: Create a new account
2. **Sign In**: Log in with your credentials
3. **Dashboard**: View your workout statistics and charts
4. **Add Workout**: Log new workouts with details like category, duration, and calories
5. **Tutorials**: Browse workout tutorials by muscle group
6. **Blogs**: Read fitness-related articles
7. **Contact**: View information about the creators

## API Endpoints

### Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/signin` - User login

### Workouts
- `GET /api/user/workouts` - Get user's workouts
- `POST /api/user/workouts` - Add new workout
- `DELETE /api/user/workouts/:id` - Delete workout

## Project Structure

```
FitnessTracker/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # State management
│   │   ├── utils/          # Utilities and themes
│   │   └── api/            # API configuration
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   └── index.js            # Server entry point
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Multi-container setup
└── README.md
```

## Deployment

### AWS EC2 with Docker

1. Launch an EC2 instance (Amazon Linux 2, t2.micro for free tier)
2. Install Docker on EC2
3. Clone the repository
4. Run `docker-compose up --build`
5. Access the app at `http://<ec2-public-ip>:8081`

### Environment Variables for Production

- `MONGODB_URL`: MongoDB connection string (use MongoDB Atlas for production)
- `JWT_SECRET`: Secure JWT secret key
- `NODE_ENV`: Set to 'production'

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Authors

- **Somay Khatri** - Developer
- **Priyanshu** - Developer

*Students of SRM University Delhi NCR Sonipat*

## Acknowledgments

- Images sourced from Unsplash
- Icons and UI components inspired by modern fitness apps
- Built as a minor project for academic purposes
