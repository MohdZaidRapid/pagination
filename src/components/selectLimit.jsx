import React from "react";

const selectLimit = (props) => {
  return (
    <select
      onChange={(e) => props.onLimitChange(e.target.value)}
      className="select"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
};

export default selectLimit;
