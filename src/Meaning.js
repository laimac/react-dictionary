import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
return (
    <div className="Meaning">
    <h3>
        {props.meaning.partOfSpeech}
    </h3>
    {props.meaning.definitions.map(function(definition,index){
        return(
            <div key={index}>
                <div className="text">

                    {definition.definition}
                    <br/>
                    <span className="example">
                        "{definition.example}"
                    </span>
                    <br/>
                    <span className="title">Synonyms: </span> <br />
                    <Synonyms synonyms={definition.synonyms} />
                </div>
            </div>
        );
    })}
    </div>
);
}