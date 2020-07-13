import React, { useState } from "react";
import "./Chatbot.css";
import ques from './Questions';
import CheckQuestions from "./CheckQuestions";


const Greet= (props) => {

    if(props.flag){
    return (
      <>
        <div className="chat_container">
          <div className="mess_container">
            <div className="question" >
              <span>
                Hlo {props.name} How are you I am going to ask you some questions
                try to give correct answers
              </span>
            </div>
          </div>
        </div>
        
        <CheckQuestions/>
      </>
    );}else{
        return(<></>)
    }
  };

  export default Greet;