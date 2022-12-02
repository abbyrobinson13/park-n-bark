const CurrentForecast = ({ currentForecast }) => {
let icon = `http://openweathermap.org/img/wn/${currentForecast.icon}@2x.png`
    return (
     <div>
    <div> <img src={icon}/></div>

    <div>{currentForecast.maxtemp} | {currentForecast.mintemp} </div> 
     
     
     </div>
     );
  };
  
  export default CurrentForecast;