import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Dictionary.css';
import axios from "axios";
import Results from './Results.js';


export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);
    let [results, setResults]=useState(null);

function handleResponse(response){
setResults(response.data[0]);     
}

function search(event){
    event.preventDefault();

let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

return(
    <div className="dictionary">
<form onSubmit={search}>
<input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="inputField"/>
<button type="submit" className="btn btn-primary searchButton px-1.3rem py-0.2rem align-baseline">Search</button>

</form>
<Results results={results}/>
    </div>
);
}