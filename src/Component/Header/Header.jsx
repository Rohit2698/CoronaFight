import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
      <div className="fixed-top">
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-11 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Covid Data</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/country" className="nav-link" href="#">Covid Data</Link>
                </li>
                <li className="nav-item">
                  <Link to="/check" className="nav-link" href="#">Covid Check</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=Cj0KCQjwgJv4BRCrARIsAB17JI5z17FGRUDwqhK45pfmMeMbiIFDlC_8qKLqlEPOdrLqhSmn7AntQSIaAsG4EALw_wcB">WHO</a>
                </li>
                
              </ul>
              
            </div>
          </nav>
</div>
</div>
</div>
    </div>

        
    )
}

export default Header;