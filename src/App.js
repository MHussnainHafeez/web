
// import { useState } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './navbar';
// import Component from './component';


function App() {
  // const [weight,setweight]=useState();
  // const [height,setheight]=useState();
  // const [bmi,setbmi]=useState();
  // const [message,setmessage]=useState();
  // const calBmi = (e) => {
  //   e.preventDefault();
  //   let val = (
  //     [Number(weight) / Number(height) / Number(height)] * 10000
  //   ).toFixed(1);
  //   setbmi(val);
  //   if (val < 18.5) {
  //     setmessage("Under Weight");
  //   } else if (val > 18.5 && val <= 24.9) {
  //     setmessage("Healthy");
  //   } else if (val > 24.9 && val < 30) {
  //     setmessage("Overweight");
  //   } else {
  //     setmessage("Obese");
  //   }
  // };
  // UseState
const [first, second]= useState(0);
  function fun(){
    return(
      second(first+1)
    )
  }
  // use effect
const [eff, cheff]=useState(0);
useEffect(()=>{
  cheff(eff+1)
},[])


  return (

<>
<Navbar/>
<h1>Number: {first}</h1>

<button onClick={fun}>click</button>
<p>{eff}</p>







{/* <div className="container">
  <h2>BMI Calculator</h2>
  <form >
    <div>
      <label htmlFor="height">Height:</label>
    <input type="text" placeholder='Enter Your Height' value={height} onChange={(e)=>setheight(e.target.value)} />
    </div>
    <div>
      <label htmlFor="weight">Weight:</label>
    <input type="text" placeholder='Enter Your Weight' value={weight} onChange={(e)=>setweight(e.target.value)}/>
    </div>
    <div className='btns'>
      <button className='btn1' onClick={calBmi}>Submit</button><br />
      <button className='btn2' >Reset</button>
    </div>
    <div className="output">
      <h3>Your BMI is:{bmi}</h3>
      <p>{message}</p>
    </div>
  </form>
</div>
<Component/> */}
</>
    );
}

export default App;
