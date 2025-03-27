import React from "react"
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WorkoutPlans from './pages/WorkoutPlans';

// eslint-disable-next-line no-unused-vars


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workout-plans" element={<WorkoutPlans />} />
      </Routes>
    </Router>
  );
}

// Registration route
// app.post('/api/register', async (req, res) => {
//   const { username, password } = req.body;
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Store user in DB (assuming a User model)
  // Example: await User.create({ username, password: hashedPassword });

  // Send confirmation response
  res.status(201).json({ message: 'User registered successfully' });


export default App;