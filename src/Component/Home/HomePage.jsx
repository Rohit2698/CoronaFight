import React from "react";
import img from "../../images/covid.svg";
import "./HomePage.css";
import Option from "./Tabs";
import CovidData from "./covidData/CovidData";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid main">
        <div className="row">
          <div className="col-lg ml-auto order-2">
            <img className="covid_img" src={img} alt="rohit"/>
          </div>
          <div className="col ml-auto right_info mt-1">
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. Most people infected with the
              COVID-19 virus will experience mild to moderate respiratory
              illness and recover without requiring special treatment. Older
              people, and those with underlying medical problems like
              cardiovascular disease, diabetes, chronic respiratory disease, and
              cancer are more likely to develop serious illness.
            </p>
            <a
              className="link_a"
              href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
              target="_blank"
              rel="noopener"
            >
              <span className="link">Click To Know More</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid tabs">
        <div className="row">
          <div className="col-11 ml-auto mr-auto order-1 options">
            <Option />
          </div>
        </div>
      </div>
      <div className="title_data">
    <span>Covid Data</span>
    </div>
      <CovidData />
      <Footer/>
    </>
  );
};

export default HomePage;
