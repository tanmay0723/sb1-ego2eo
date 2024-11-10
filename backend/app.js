const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5000',  // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow common HTTP methods
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB connection (make sure you have your MongoDB URI in the .env file)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Example route for signup
app.post('/api/auth/signup', (req, res) => {
  const { username, email, password } = req.body;
  // Add signup logic here (e.g., create a new user in MongoDB)
  res.send('Signup successful');
});

// Example route for login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Add login logic here (e.g., check user credentials)
  res.send('Login successful');
});

// Define your port (default to 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
})