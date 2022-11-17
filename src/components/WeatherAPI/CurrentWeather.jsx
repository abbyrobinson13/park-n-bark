import React, { useEffect } from "react";

const CurrentWeather = ({ currentWeather }) => {
  useEffect(() => {
    console.log("first render");

    return () => console.log("unmounted");
  }, []);

  // useEffect(() => {
  //   console.log("only on first render");
  //   const id = setInterval(() => {
  //     console.log("every 5 seconds");
  //   }, 5000);
  //   return––
  // }, []);

  // useEffect(() => {
  //   console.log("currentWeather has changed value");
  // }, [currentWeather]);

 
  return (
    <div>
      The current weather is:
      <p>Conditions: {currentWeather.conditions}</p>
      <p>Temperature: {currentWeather.temperature}</p>
    </div>
  );
};

export default CurrentWeather;