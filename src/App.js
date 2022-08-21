import React, {useState} from "react";


function App() {
  const [temperatureValue, setTemperatureValue] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState('cold')

const increseTemperature = () => {
  if(temperatureValue === 35) return
  const newTemperature = temperatureValue + 1

  if (newTemperature >= 15){
    setTemperatureColor('warm')
  } if (newTemperature >= 30)
    setTemperatureColor('hot')
  
  setTemperatureValue(newTemperature)
}

const decreaseTemperature = () => {
  if (temperatureValue === 0) return
  const newTemperature = temperatureValue - 1

  if (newTemperature < 30){
    setTemperatureColor('warm')
  } if(newTemperature < 15)
    setTemperatureColor('cold')
  
  setTemperatureValue(newTemperature)
}


  return (
    <div className="app-container">
     <div className="temperature-display-container">
      <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
     </div>
      <div className="button-container">
        <button onClick={() => increseTemperature() }>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>

    </div>
  );
}

export default App;
