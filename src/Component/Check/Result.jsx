import React, { useState, useEffect } from "react";
import "./CheckQuestions";
import safe from '../../images/safe.gif';
import problem from '../../images/problem.gif';
import danger from '../../images/danger.gif';

const Result = (props) => {
  const [sumval, setSum] = useState(0);
  let sum = 0;
  useEffect(() => {
    function getSum() {
      items.forEach((element) => {
        sum = parseInt(sum) + parseInt(element);
        setSum(sum);
      });
    }
    getSum();
  }, []);
  const items = props.totalSum;
  if (sumval <= 15) {
    return <>
    <img src={safe} alt="safe"/>
    
    You are okay but be safe
    <br/>
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank">Go to WHO website</a>
    </>;
  } else if (sumval >= 16 && sumval <= 25) {
    return <>
    <img src={problem} alt="problem"/>
    
    <br/>
    Quaratine yourself
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank">Go to WHO website</a>
    </>;
  }else{
    return <>
    <img src={danger} alt="danger"/>
    Go visit the doctor or call doctor
    <br/>
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub" target="_blank">Go to WHO website</a>
    </>;
     
}
};

export default Result;
