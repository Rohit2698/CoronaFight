import React, { useState } from "react";
import "./Chatbot.css";
import Greet from "./Greet";
import CheckQuestions from "./CheckQuestions";
const Chatbot = () => {
  const [name, setName] = useState(null);
  const [greeting, setGreeting] = useState(null);
  const [flag, setFlag] = useState(false);
  const [disable, setDisable] = useState(false);
  const addGreeting = () => {
    setGreeting(name);
    setFlag(true);
    setDisable(true);
  };

  return (
    <div className="main_div">
      <div className="div_chat">
        <div className="chat_container">
          <div className="mess_container">
            <div className="question">
              <span>What is your name</span>
            </div>
            <div className="answer">
              <span>
                <input
                  type="text"
                  value={name}
                  disabled={disable}
                  onChange={(name) => setName(name.target.value)}
                />
                
                <button onClick={addGreeting} disabled={disable}>
                  Send
                </button>
              </span>
            </div>
          </div>
        </div>
        <Greet name={name} flag={flag} />
      </div>
    </div>
  );
};

export default Chatbot;
