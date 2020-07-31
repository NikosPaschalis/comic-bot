import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    
            <div className = 'footer'>Made with <FontAwesomeIcon icon= {faCoffee}  /> and passion for comics <FontAwesomeIcon icon= {faBook}  /> <a href="https://github.com/NikosPaschalis">by Nikos Paschalis</a> </div> 
            
            


)

export default Footer;