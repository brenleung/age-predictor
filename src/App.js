import './App.css';
import Form from "../src/Components/JS/Form.js"
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <h3>Predict My Age</h3>
      <p>Ever wanted to figure out how old you're going to live until? Well, it's your lucky day. Or maybe not.
      <br></br>Simply type your name below (first or last only) and then hit submit to see your age!</p>
      <Form/>
    </div>
  );
}

export default App;
