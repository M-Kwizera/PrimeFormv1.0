import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkoutPlans() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get('http://localhost:5000/api/workouts');
      setWorkouts(response.data.results);
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Your Custom Workout Plans</h1>
      <div className="mt-4">
        {workouts.map((workout) => (
          <div key={workout.id} className="p-4 border border-gray-300 rounded mb-4">
            <h2 className="text-xl font-semibold">{workout.name}</h2>
            <p>{workout.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlans;
