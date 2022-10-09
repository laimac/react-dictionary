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
                    <div className="example">
                        {definition.example ? (
                            <div>
                                "{definition.example}"
                            </div>
                        ): (<div>{definition.example}</div>)}
                    </div>
                    <br/>
                    <Synonyms synonyms={props.meaning.synonyms} />

                </div>
            </div>
        );
    })}
    </div>
);
}