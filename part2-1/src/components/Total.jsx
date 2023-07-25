/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Number of exercises {total}</p>;
};

export default Total;
