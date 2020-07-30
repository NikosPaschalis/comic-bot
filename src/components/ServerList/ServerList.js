import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServerList.css";


const ServerList = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
 
  useEffect(() => {
    axios.get("https://comic-bot-fe2f1.firebaseio.com/MickeyMouse.json").then(response => {

        setData(response.data);
      
    }).catch(error => {
      setErr("Woops something went wrong on our end! I'm brewing some coffee and calling the master to fix it.");
    });
    
  },[]);

return ( 
  
      err ?
      <ul className="link-list"> <li className="link-list-item err">{err}</li></ul>
      :
        <ul className="link-list">
          {Object.keys(data).map(function(key,index) {
          
            return (
              <li className="link-list-item" key={key}>
          <a
             href={data[key]}
             target="_blank"
            rel="noopener noreferrer"
            className="link-list-item-url">
           {key}
          </a>
         
          </li>
            );
            })}
          
          
        </ul>
  
          );
};

export default ServerList;