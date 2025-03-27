import React, { useState } from "react";
import bcrypt from "bcryptjs"; // Ensure bcryptjs is installed correctly

function App() {
  const [password, setPassword] = useState("");
  
  // Ensure the function is async to use await
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password:", hashedPassword);
      
      // Store user in DB (assuming a User model)
      // Example API call to store the hashed password can go here
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;