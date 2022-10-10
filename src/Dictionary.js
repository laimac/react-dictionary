import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './Dictionary.css';
import Results from './Results.js';
import Photos from "./Photos";


export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded] =useState(false);
    let [photos, setPhotos]=useState(null);

function handleResponse(response){
setResults(response.data[0]);     
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

function search(){
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsapiKey=`563492ad6f917000010000011bc9e771f0c846e19a292ca0386e3892`;
    let pexelsapiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsapiUrl, {
        headers: {"Authorization":
    `Bearer ${pexelsapiKey}`}}
    ).then(handlePexelsResponse);
}


function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if(loaded){
        return(
            <div className="dictionary">
        
        <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="inputField"/>
        <button type="submit" className="btn btn-primary searchButton px-1.3rem py-0.2rem align-baseline">Search</button>
        
        </form>
        <Results results={results}/>
        <Photos photos={photos}/>
            </div>
        );
    }else{
     load();
     return "Loading...";
    }
}