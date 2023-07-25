/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Filter = ({ value, onChange }) => (
  <div>
    find countries <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
