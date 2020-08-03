import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    
            <div className = 'footer'>
                <a href="https://www.paypal.com/paypalme/nikospsxls">
                    <FontAwesomeIcon size="xs" icon={faCoffee} /> Treat me a coffee to keep coding
                </a>
                <a href="mailto:nikospasxalis94@gmail.com">
                    <FontAwesomeIcon size="xs" icon={faLinkedinIn} /> LinkedIn
                </a>
                <a href="mailto:nikospasxalis94@gmail.com">
                    <FontAwesomeIcon size="xs" icon={faEnvelope} /> Contact me
                </a>
                
                
                
            </div> 
            
            


)

export default Footer;