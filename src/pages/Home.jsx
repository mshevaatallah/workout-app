import React, { useState, useEffect } from "react";

function Home() {
  const [workout, setWorkout] = useState(null);
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkout(json);
      }
    };
    fetchWorkout();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
}

export default Home;
