import React from 'react';
import Button from "../JS/Button.js"
import axios from 'axios';
import "../CSS/Form.css"
import {useState} from "react";


export default function Form({text}) {
    const [name, setName] = useState("");  // name
    const [results, setResults] = useState([]); // results set in array
    const [submitted, setSubmitted] = useState(false); // did the user submit yet?
    const [error, setError] = useState(false);  // if the user input an error

    const handleSubmit = (event) => {
        event.preventDefault();  // don't reload the page

        if (name === "" || (name.indexOf(' ') >= 0 && name.indexOf(' ') < name.length-1)) {
            setError(true);
            setSubmitted(false);
            return;
        }

        axios.get(`https://api.agify.io?name=${name}`)  // gets from agify api
        .then(response => {
            if (response.data.age === null) {
                setError(true);
                setSubmitted(false);
            }
            else {
                setError(false);
                setSubmitted(true);
                setResults(response.data); // get response
            }
        })
        .catch(error => {
            console.error(error);  // if there's an error
        });
    }

    return ( 
        <div class="form"> 
            <form onSubmit = {handleSubmit}>
                <label>
                    <input type="text" value={name} placeholder="Insert name here.." onChange={(event) => setName(event.target.value)} />
                </label>

                <br></br>

                <Button text={"Submit"}/>
            </form>

            {/* below: error and submitted messages */}
            {error && <p class="error">Please submit a valid name. Make sure it does not have whitespace.</p>}
            
            {submitted && results && <p class="result">Hey <strong>{results.name}</strong>, you are going to live to be <strong>{results.age+10}</strong> years old. Do you have enough time to live?</p>}
        </div>
    )
}