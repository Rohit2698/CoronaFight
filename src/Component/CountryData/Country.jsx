import React, { useEffect, useState } from "react";
import "./Country.css";
import Footer from "../Footer/Footer";
import Axios from "axios";
import Cards from "../Cards/Cards";
import States from "../States/States";

const Country = () => {
  const [country, selectcountry] = useState("");
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [death, setDeath] = useState(null);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await Axios.get(
          "https://covid19.mathdro.id/api/countries/" + country
        );
        setConfirmed(res.data.confirmed.value);
        setRecovered(res.data.recovered.value);
        setDeath(res.data.deaths.value);
      } catch (e) {
        setConfirmed(0);
        setRecovered(0);
        setDeath(0);
      }
    }
    getCountries();
  });

  const inputValue = (event) => {
    const data = event.target.value;
    selectcountry(data);
  };
  return (
    <>
      <div className="container-fluid search_main" style={{ marginTop: "10%" }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <input
              className="search"
              type="text"
              placeholder="Enter Your Country"
              value={country}
              onChange={inputValue}
            ></input>
          </div>
        </div>
      </div>
      <Cards confirmed={confirmed} recovered={recovered} death={death} />

      <States country={country} />
      <Footer />
    </>
  );
};

export default Country;
