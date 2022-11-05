import React, { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export function WorkoutContextProvider({ children }) {
  return <WorkoutContext.Provider>{children}</WorkoutContext.Provider>;
}
