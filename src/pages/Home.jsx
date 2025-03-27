import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to PrimeForm</h1>
            <p className="mt-4 text-center text-gray-600">Your personalized Welness journey starts here.</p>
        <div className="mt-8 text-center">
            <Link to="/profile" className="text-blue-600">Set up your profile</Link>
      </div>
    </div>
    );
}

export default Home;