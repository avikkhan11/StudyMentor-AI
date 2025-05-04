import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <div className="app">
      <h1>StudyMentor AI</h1>
      <p>Your personal AI study companion</p>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <Button>Click me</Button>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/subjects">Subjects</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
