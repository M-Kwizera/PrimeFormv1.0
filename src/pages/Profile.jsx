import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('');
  const [goals, setGoals] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to save user profile (This will be added later)
    console.log({ name, goals });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Create Your Profile</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="p-2 border border-gray-300 rounded"
        />
        <textarea 
          placeholder="Fitness Goals" 
          value={goals} 
          onChange={(e) => setGoals(e.target.value)} 
          className="mt-4 p-2 border border-gray-300 rounded w-full"
        />
        <button 
          type="submit" 
          className="mt-4 p-2 bg-blue-600 text-white rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
