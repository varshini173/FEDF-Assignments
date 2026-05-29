import React from "react";
 import "./App.css";
 
 function App() {
 
 const matrix1 = [
 [1, 2],
 [3, 4]
 ];
 
 const matrix2 = [
 [5, 6],
 [7, 8]
 ];
 
 let result = [];
 
 for (let i = 0; i < matrix1.length; i++) {
 
 result[i] = [];
 
 for (let j = 0; j < matrix1[i].length; j++) {
 
 result[i][j] = matrix1[i][j] + matrix2[i][j];
 
 }
 }
 
 return (
 
 <div className="App">
 
 <h1>Sum of Two Matrices</h1>
 
 <h2>Matrix 1</h2>
 
 <table>
 <tbody>
 {matrix1.map((row, index) => (
 <tr key={index}>
 {row.map((value, i) => (
 <td key={i}>{value}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 
 <h2>Matrix 2</h2>
 
 <table>
 <tbody>
 {matrix2.map((row, index) => (
 <tr key={index}>
 {row.map((value, i) => (
 <td key={i}>{value}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 
 <h2>Result Matrix</h2>
 
 <table>
 <tbody>
 {result.map((row, index) => (
 <tr key={index}>
 {row.map((value, i) => (
 <td key={i}>{value}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 
 </div>
 );
 }
 
 export default App;
