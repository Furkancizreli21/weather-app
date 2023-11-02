import React, { useState } from "react";
import axios from "axios";

const Form = ({ setInfo, setState }) => {
  const [city, setCity] = useState("");

  const handleChange = async (e) => {
    const api = "3b8bbe0f738c970c3c88e9d4154604ba";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios(baseURL).then((res) => setInfo(res.data));
    setState(true);
    setCity("");
  };
  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Şehri Giriniz"
          ></input>
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Verileri Getir
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
