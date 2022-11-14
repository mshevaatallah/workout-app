import React, { useState, useEffect } from "react";
import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/WorkoutForm";
import { useAuthContext } from "../hooks/useAuthContext";
function Home() {
  const [workout, setWorkout] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setWorkout(json);
      }
    };
    if (user) {
      fetchWorkout();
    }
  }, [workout, user]);
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
