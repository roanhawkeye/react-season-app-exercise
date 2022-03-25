import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
  const icon = "winter" ? "snowflake" : "sun";

  return (
    <h1>
      <i className={`${icon} icon`} />
      <div>{text}</div>
      <i className={`${icon} icon`} />
    </h1>
  );
};

export default SeasonDisplay;
