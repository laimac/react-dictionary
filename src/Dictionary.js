import React, {useState} from 'react';
import './Dictionary.css';
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function handleResponse(response){
console.log(response.data[0]);
}

function search(event){
    event.preventDefault();
alert(`Searching for ${keyword} definition`);}
let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);

return(
    <div className="dictionary">
<form onSubmit={search}>
<input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFOcus={true}/>
</form>
    </div>
)
   ;
}