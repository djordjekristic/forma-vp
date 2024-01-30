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
        let newData= {[newPlace]:newTemp};
         if(newPlace===""){
            return(alert('entry name'));
         }
         if(newTemp===""){
            return(alert('entry temperature'));
         }
         setPlaces(currentPlaces=>({
            ...currentPlaces,
            ...newData
         }))
    }
    function deleteTemp(e){
        setPlaces("");

    }


    return(
        <div>
            <h3 className="text-center text-muted mb-3">Temperature info</h3>
            <div className="text-center">
               
        <input className="border border-success rounded" onInput={(e)=>setNewPlace(e.target.value)} type="text"placeholder="Town name"/><br/>
                
        <input className="border border-success rounded" onInput={(e)=>setNewTemp(e.target.value)} type="text"placeholder="Temperature"/>
            </div>
            <div className="m-2">
        <button className=" btn btn-primary ms-2" onClick={newInfo}>Make</button>
        <button className="btn btn-warning ms-2" onClick={deleteTemp}>Reset</button>
           </div>
        <div className=" text-center border border-3 border-info mb-4 mt-5">
           {Object.entries(places).map(([place,temp])=>(
            <p>{place} : {temp}C</p>
           ))}
        </div>
        

        </div>
        
    )

}

export default Places;