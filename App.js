import React, { useState } from "react";
 import "./App.css";
 
 function App() {
 
 const [number, setNumber] = useState("");
 const [sum, setSum] = useState(0);
 
 const calculateSum = () => {
 
 let total = 0;
 
 for (let i = 1; i <= number; i++) {
 total = total + i;
 }
 
 setSum(total);
 };
 
 return (
 
 <div className="App">
 
 <h1>Sum of N Numbers</h1>
 
 <input
 type="number"
 placeholder="Enter N Value"
 value={number}
 onChange={(e) => setNumber(e.target.value)}
 />
 
 <br /><br />
 
 <button onClick={calculateSum}>
 Calculate Sum
 </button>
 
 <h2>Sum = {sum}</h2>
 
 </div>
 );
 }
 
 export default App;