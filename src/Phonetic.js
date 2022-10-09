import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
return (
    <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
        <i class="fa-solid fa-headphones-simple"></i>
        &nbsp; Listen
        </a>
        <span className="pronounciation">{props.phonetic.text}</span>
    </div>
);
}