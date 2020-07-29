import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServerList.css";


const ServerList = () => {
  const [err, setErr] = useState(null);
  const [name, setName] = useState([]);
  const [url, setURL] = useState([]);
  useEffect(() => {
    axios.get("https://comic-bot-fe2f1.firebaseio.com/MickeyMouse.json").then(response => {
      for (const [key, value] of Object.entries(response.data)) {
        console.log(`${key}: ${value}`);
        setName(key);
        setURL(value);

      }
    }).catch(error => {
      setErr("Woops something went wrong on our end! I'm brewing some coffee and calling the master to fix it.");
    });
  },[]);

return ( 
      err ?
        <ul className="link-list">
          <li className="link-list-item link-list-item-url">{err}</li>
        </ul>
        :
        <ul className="link-list">
          <li key={name} className="link-list-item">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item-url">
            {name}
          </a>
          </li>
        </ul>
          );
};

export default ServerList;