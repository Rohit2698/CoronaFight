import React from 'react';
import './Footer.css';
const Footer=()=>{
    return(
            <>
            <div className="container-fluid footer">
                <div>
                    <span className="copyright">&#xa9; Copyright Rohit_Thakur</span><br/><br/>
                    <div>
                    <ul className="logos">
                    <li><i class="fa fa-github" style={{fontSize:"24px"}}></i></li>
                    <li><i class="fa fa-linkedin-square" style={{fontSize:"24px"}}></i></li>
                    <li><i class="fa fa-instagram" style={{fontSize:"24px"}}></i></li>
                    </ul>
                    </div>
                </div>
                
            </div>
            </>
    )
}

export default Footer;