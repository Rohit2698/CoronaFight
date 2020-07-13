import React from "react";
import CountUp from "react-countup";
import '../Home/covidData/CovidData';
const Cards = (props) => {
  const death=props.death;
  const recovered=props.recovered;
  const total=props.confirmed;
    return (
    <>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md ml-auto mr-auto">
            <div className="card" style={{ borderBottom: "5px black solid" }}>
              <div className="card-body">
                <h2 className="card-title">Confirmed</h2>
                <h3>
                  <CountUp
                    start={0}
                    end={total}
                    duration={2.5}
                    separator=","
                  />
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md ml-auto mr-auto">
            <div class="card" style={{ borderBottom: "5px yellow solid" }}>
              <div class="card-body">
                <h2 className="card-title">Recovered</h2>
                <h3>
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2.5}
                    separator=","
                  />
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md ml-auto mr-auto">
            <div class="card" style={{ borderBottom: "5px red solid" }}>
              <div class="card-body">
                <h2 className="card-title">Deaths</h2>
                <h3>
                  <CountUp start={0} end={death} duration={2.5} separator="," />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;