import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [values, setValues] = useState({
    first: "",
    second: "",
  });
  const [data, setData] = useState("");
  const getDaysUntilMyBirthday = () => {
    axios
      .get(
        "http://localhost:5000/productsconcat?first=" +
          values.first +
          "&second=" +
          values.second
      )
      .then((response) => {
        setData(response.data); //Pendiente manejar el error
      });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (values.first !== "" && values.second !== "") {
      setInputEmpty(false);
    }
  }, [inputEmpty, values.first, values.second]);

  return (
    <>
      <div className="container">
        <div className="inputs-container">
          <input
            placeholder="Ingresa el primer número"
            value={values.first}
            onChange={handleChange("first")}
          ></input>
          <input
            placeholder="Ingresa el segundo número"
            value={values.second}
            onChange={handleChange("second")}
          ></input>
        </div>
        <div className="button">
          <button
            onClick={getDaysUntilMyBirthday}
            disabled={inputEmpty ? true : false}
          >
            Enviar
          </button>
        </div>
      </div>
      <div className="data">{data ? <div>El número concatenado es: {data}</div> : null}</div>
    </>
  );
}

export default App;
