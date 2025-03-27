import React, { useState } from "react";
import bcrypt from "bcryptjs";

function App() {
  const [password, setPassword] = useState("");
  
  // You need to make the function async to use await inside it
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in DB (assuming a User model)
    // This would be an API call or some other action
    console.log("Hashed Password:", hashedPassword);
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
