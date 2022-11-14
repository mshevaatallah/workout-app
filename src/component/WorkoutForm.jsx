import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [Error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be Logged");
    }
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setLoad("");
      setReps("");
      setTitle("");
      setError(null);
      console.log("new workout added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSumbit}>
      <h3>Add a New Workout</h3>
      <label> Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label> Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label> Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>
      {Error && <div className="error">{Error}</div>}
    </form>
  );
}

export default WorkoutForm;
