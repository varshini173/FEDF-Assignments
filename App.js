import React from "react";
 import "./App.css";
 
 function App() {
 
 let starPattern = [];
 let numberPattern = [];
 let alphabetPattern = [];
 
 // Star Pattern
 for (let i = 1; i <= 5; i++) {
 
 let row = "";
 
 for (let j = 1; j <= i; j++) {
 row += "* ";
 }
 
 starPattern.push(row);
 }
 
 // Number Pattern
 for (let i = 1; i <= 5; i++) {
 
 let row = "";
 
 for (let j = 1; j <= i; j++) {
 row += j + " ";
 }
 
 numberPattern.push(row);
 }
 
 // Alphabet Pattern
 for (let i = 1; i <= 5; i++) {
 
 let row = "";
 
 for (let j = 0; j < i; j++) {
 row += String.fromCharCode(65 + j) + " ";
 }
 
 alphabetPattern.push(row);
 }
 
 return (
 
 <div className="App">
 
 <h1>ReactJS Pattern Programs</h1>
 
 <h2>Star Pattern</h2>
 
 {starPattern.map((item, index) => (
 <p key={index}>{item}</p>
 ))}
 
 <h2>Number Pattern</h2>
 
 {numberPattern.map((item, index) => (
 <p key={index}>{item}</p>
 ))}
 
 <h2>Alphabet Pattern</h2>
 
 {alphabetPattern.map((item, index) => (
 <p key={index}>{item}</p>
 ))}
 
 </div>
 );
 }
 
 export default App;