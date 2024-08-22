import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [stReading,setStReading]=useState(0);
  const [endReading,setEndReading]=useState(0);
  const [fuel,setFuel]=useState(0)
  const [milage,setMilage]=useState(0);
  const [error, setError] = useState("");

  function stReadingHandler(event){

    setStReading(Number(event.target.value));



  }

  function endReadingHandler(event){

    setEndReading(Number(event.target.value));



  }

  function stFuelHandler(event){
    setFuel(Number(event.target.value));
  }

  

  function setMilageHandler(){

    if (endReading < stReading) {
      setError("Ending reading must be greater than or equal to starting reading.");
      setMilage(null);
      return;
    }

    if (fuel <= 0) {
      setError("Fuel consumed must be greater than zero.");
      setMilage(null);
      return;
    }

    let distance = endReading - stReading;
    let calculatedMilage = distance / fuel;

    setMilage(calculatedMilage);
    setError(""); // Clear error message if inputs are valid
  
    
  }

  return (
    <div className='body'>
    <main className='main-background'>
     <div className='heading'>

      <h3>MILEAGE CALCULATOR</h3>


     </div>

     <div className='input-section'>

      
      
      <input type="number" id="start-reading" placeholder='Start Reading' onChange={stReadingHandler}></input>
      <br></br>
      
    
      <input type="number" id="end-reading" placeholder='End Reading' onChange={endReadingHandler}></input>
       <br/>
      
      
      <input type="number" id="Fuel-consumed" placeholder='Fuel' onChange= {stFuelHandler}></input>
     
      <h4>{`The milage of you vehicle is ${milage}`}</h4>


      <div className='button'>
      <button onClick={ setMilageHandler}>Calculate</button>
     
     </div>

    </div>
    
    
     
     </main>
     </div>
  )
}

export default App
