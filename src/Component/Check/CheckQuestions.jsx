import React, { useEffect, useState } from "react";
import ques from "./Questions";
import Result from "./Result";
const CheckQuestions = () => {
  const [count, setCount] = useState(0);
  var [sum, setSum] = useState(0);
  const [totalsum,setTotalSum]=useState([]);
  const [options, setOption] = useState([]);
  const [flag, setFlag] = useState(false);
  const [disable, setDisable] = useState(false);
  const [checkdisable, setcheckDisable] = useState(false);

  function start() {
    setCount(0);
    setFlag(true);
    const options = Object.keys(ques[count].option);
    setOption(options);
  }

  function changeQuestion() {
    try {
      setCount(count+1);
      setOption([]);
      setFlag(true);
      const options = Object.keys(ques[count+1].option);
      setOption(options);
      setTotalSum((prevSum)=>{
        return [...prevSum,sum];
      })
      setSum(0);
      console.log(totalsum);
    } catch (e) {}
  }

  function sumzero(e) {
    setcheckDisable(!checkdisable);
    if (e.target.checked) {
      sum = 0;
    }
  }
  function sumvalue(e) {
    if (e.target.checked) {
      sum = parseInt(sum) + parseInt(e.target.value);
    } else {
      sum = parseInt(sum) - parseInt(e.target.value);
    }
  }

  if (flag) {
    if (count < ques.length && ques[count].type == "checkbox") {
      return (
        <>
          <div className="quest">{ques[count].question}</div>
          <div className="option">
            {options.map((opt, index) => {
              return (
                <>
                  <div class="checkbox">
                    <label>
                      <input
                        disabled={checkdisable}
                        type={ques[count].type}
                        value={ques[count].option[options[index]]}
                        onChange={(e) => sumvalue(e)}
                      />
                      {options[index]}
                    </label>
                  </div>
                </>
              );
            })}
            <input type="checkbox" value="0" onChange={(e) => sumzero(e)} />
            None of these
          </div>
          <button onClick={changeQuestion} type="button" class="btn btn-secondary">Next</button>
        </>
      );
    } else if (count < ques.length && ques[count].type == "radio") {
      return (
        <>
          <div className="quest">{ques[count].question}</div>
          <div className="option">
            {options.map((opt, index) => {
              return (
                <>
                  <div class="checkbox">
                    <label>
                      <input
                        type={ques[count].type}
                        value={ques[count].option[options[index]]}
                        name="age"
                        onChange={(e) => sumvalue(e)}
                      />
                      {options[index]}
                    </label>
                  </div>
                </>
              );
            })}
          </div>
          <button onClick={changeQuestion} type="button" class="btn btn-secondary">Next</button>
        </>
      );
    } else {
      return <Result totalSum={totalsum}/>;
    }
  } else {
    return (
      <>
      <button style={{marginTop:"10px"}}  type="button" class="btn btn-info" onClick={start}>Info</button>
      </>
    );
  }
};
export default CheckQuestions;
