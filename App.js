import React, { useState } from "react";
 import "./App.css";
 
 function App() {
 
 const [number, setNumber] = useState("");
 const [string, setString] = useState("");
 
 const [reverseNumber, setReverseNumber] = useState("");
 const [reverseString, setReverseString] = useState("");
 
 const reverseValues = () => {
 
 // Reverse Number
 let num = number;
 let rev = 0;
 
 while (num > 0) {
 
 let rem = num % 10;
 rev = rev * 10 + rem;
 num = parseInt(num / 10);
 
 }
 
 setReverseNumber(rev);
 
 // Reverse String
 let revStr = string.split("").reverse().join("");
 
 setReverseString(revStr);
 };
 
 return (
 
 <div className="App">
 
 <h1>Reverse of Number and String</h1>
 
 <input
 type="number"
 placeholder="Enter Number"
 value={number}
 onChange={(e) => setNumber(e.target.value)}
 />
 
 <br /><br />
 
 <input
 type="text"
 placeholder="Enter String"
 value={string}
 onChange={(e) => setString(e.target.value)}
 />
 
 <br /><br />
 
 <button onClick={reverseValues}>
 Reverse
 </button>
 
 <h2>Reversed Number: {reverseNumber}</h2>
 
 <h2>Reversed String: {reverseString}</h2>
 
 </div>
 );
 }
 
 export default App;
