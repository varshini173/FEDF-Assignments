import React from "react";
 import "./App.css";
 
 function App() {
 
 const books = [
 {
 title: "Java Programming",
 author: "James Gosling",
 isbn: "978-1234567890",
 publisher: "Oracle Press",
 edition: "5th",
 price: "500"
 },
 
 {
 title: "Python Basics",
 author: "Guido Van Rossum",
 isbn: "978-0987654321",
 publisher: "Tech Publications",
 edition: "3rd",
 price: "450"
 },
 
 {
 title: "HTML and CSS",
 author: "Tim Berners-Lee",
 isbn: "978-5678901234",
 publisher: "Web World",
 edition: "2nd",
 price: "350"
 }
 ];
 
 return (
 <div className="App">
 
 <h1>BOOK INFORMATION</h1>
 
 <table>
 
 <thead>
 <tr>
 <th>Title of Book</th>
 <th>Author Name</th>
 <th>ISBN Number</th>
 <th>Publisher</th>
 <th>Edition</th>
 <th>Price</th>
 </tr>
 </thead>
 
 <tbody>
 
 {books.map((book, index) => (
 <tr key={index}>
 <td>{book.title}</td>
 <td>{book.author}</td>
 <td>{book.isbn}</td>
 <td>{book.publisher}</td>
 <td>{book.edition}</td>
 <td>{book.price}</td>
 </tr>
 ))}
 
 </tbody>
 
 </table>
 
 </div>
 );
 }
 
 export default App;
