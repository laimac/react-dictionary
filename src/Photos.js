import React from "react";
import "./Photos.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function(props){
   if(props.photos){
    return (
        <section className="Photos">
            <div className="row">
{props.photos.map(function(photo, index){
    return(
        <div className="col-4">
        <img src={photo.src.tiny} key={index} className="img-fluid my-2" />
        </div>
    )
})}
</div>
        </section>
    )} else{
        return null;
    }
}