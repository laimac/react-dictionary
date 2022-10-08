import React from 'react';
import './Dictionary.css';

export default function Dictionary(){
function search(){
alert("Searching");}

return(
    <div className="dictionary">
<form onSubmit={search}>
<input type="search" placeholder="Search for a word..." autoFOcus={true}/>
</form>
    </div>
)
   ;
}