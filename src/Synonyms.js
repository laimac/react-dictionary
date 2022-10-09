import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
 if(props.synonyms && props.synonyms.length>1){
    return (
        <ul className="Synonyms">
         <span className="title">Synonyms: </span> 
            {props.synonyms.map(function(synonym, index){
            return(
                <li key={index}>
                {synonym}
                </li>
            )
        })}
        </ul>);
    } else{
        return null;
    }
}