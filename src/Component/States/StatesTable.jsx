import React from "react";
import "./States";
const StatesTable = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 ml-auto mr-auto">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">State</th>
                  <th scope="col" style={{borderBottom:"2px black solid"}}>Confirmed</th>
                  <th scope="col" style={{borderBottom:"2px yellow solid"}}>Recovered</th>
                  <th scope="col" style={{borderBottom:"2px red solid"}}>Deaths</th>
                </tr>
              </thead>
              <tbody>
                {props.Countrystate.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.provinceState}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.recovered}</td>
                        <td>{item.deaths}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatesTable;
