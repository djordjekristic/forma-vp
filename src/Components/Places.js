import React, { useState } from "react";
import App from "../App";

function Places(){

    let[places,setPlaces]=useState(
        {
            "Beograd": 15,
            "Novi Sad":20
        }
    );

    let[newPlace,setNewPlace]= useState("");
    let[newTemp,setNewTemp]= useState("");
    function newInfo(){
        let newData= {newPlace:newTemp};
         if(newPlace===""){
            return
         }
         if(newTemp===""){
            return
         }
         setPlaces(currentPlaces=>({
            ...currentPlaces,
            ...newData
         }))
    }


    return(
        <>
        <input onInput={(e)=>setNewPlace(e.target.value)} type="text"placeholder="Town name"/><br/>
        <input onInput={(e)=>setNewTemp(e.target.value)} type="text"placeholder="Temperature"/>
        <button onClick={newInfo}>Make</button>
        {Object.entries(places).map(([place,temp])=>(
            <p>{place}:{temp}C</p>
        ))}

        </>
        
    )

}

export default Places;