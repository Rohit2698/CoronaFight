import React from "react";
import Chatbot from "./Chatbot";
import './Check.css';
const Check = () => {
  return (
    <>
      <div className="container-fluid" style={{marginTop:"15%"}}>
        <div className="row">
          <div className="col-10 ml-auto mr-auto">
            <div className="row">
              <div className="col-sm player_div">
                <lottie-player
                  className="player"
                  src="https://assets5.lottiefiles.com/private_files/lf30_4avuVV.json"
                  background="transparent"
                  speed="1"
                  
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="col-sm">
                <Chatbot/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
