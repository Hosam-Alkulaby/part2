/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Course from "./components/Course";

const App = ({ courses }) => (
  <div>
    <Course courses={courses} />
  </div>
);

export default App;
