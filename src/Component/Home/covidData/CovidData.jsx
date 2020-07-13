import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../Cards/Cards";

const CovidData = () => {
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [death, setDeath] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://covid19.mathdro.id/api");
      setConfirmed(res.data.confirmed.value);
      setRecovered(res.data.recovered.value);
      setDeath(res.data.deaths.value);
    }
    getData();
  });
  return (
    <>
      <Cards confirmed={confirmed} recovered={recovered} death={death}/>
    </>
  );
};

export default CovidData;
