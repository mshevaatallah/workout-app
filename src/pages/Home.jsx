import React, { useState, useEffect } from "react";
import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/WorkoutForm";

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
  }, [workout]);
  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        <WorkoutForm />
      </div>
    </div>
  );
}

export default Home;
