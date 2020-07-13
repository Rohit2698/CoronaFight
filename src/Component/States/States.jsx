import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../CountryData/Country";
import StatesTable from "./StatesTable";
import load from "../../images/82.gif";
import "./States.css";
const States = (props) => {
  
  const [states, setStates] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [disable,setDisable]=useState(false);
  const url =
    "https://covid19.mathdro.id/api/countries/" + props.country + "/confirmed";

    useEffect(()=>{
      if(props.country===""){
        setDisable(true);
      }else{
        setDisable(false);
      }
    })
  async function givedata() {
    setFlag(true);
    setLoading(true);
    setStates([]);
    const res = await Axios.get(url);
    res.data.map((prev) => {
      setStates((prevItem) => {
        return [...prevItem, prev];
      });
      setLoading(false);
    });
  }

  if (flag) {
    if (loading) {
      return (
        <div className="image">
          <img src={load} alt="img" />;
        </div>
      );
    } else {
      return (
        <>
        <div className="state_button" >
        <button onClick={givedata} disabled={disable}  type="button" className="btn btn-primary but">
          Click To get full results
        </button>
        </div>
        <StatesTable Countrystate={states} />
          
          
        </>
      );
    }
  } else {
    return (
      <div className="state_button" >
        <button onClick={givedata}  disabled={disable} type="button" className="btn btn-primary but">
          Click To get full results
        </button>
      </div>
    );
  }
};

export default States;
