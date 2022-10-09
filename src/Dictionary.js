import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Dictionary.css';
import axios from "axios";
import Results from './Results.js';


export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded] =useState(false);

function handleResponse(response){
setResults(response.data[0]);     
}

function search(){
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
   }


function handleSubmit(event){
    event.preventDefault();
    search();
}

function load(){
    setLoaded(true);
    search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

if(loaded){
        return(
            <div className="dictionary">
        
        <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="inputField"/>
        <button type="submit" className="btn btn-primary searchButton px-1.3rem py-0.2rem align-baseline">Search</button>
        
        </form>
        <Results results={results}/>
            </div>
        );
    }else{
     load();
     return "Loading...";
    }
}