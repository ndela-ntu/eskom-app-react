import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from './api/axiosConfig.js';

function App() {
  const [status, setStatus] = useState("");
  const [municipalities, setMunicipalities] = useState([]);

  useEffect(() => {
    
    /*api
    .get(`https://loadshedding.eskom.co.za/LoadShedding/GetStatus`)
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
*/
    fetch("http://localhost:5000/api/GetStatus")
      .then((res) => res.json())
      .then((result) => {
        setStatus(result.status);
      });

    fetch("http://localhost:5000/api/GetMunicipalities")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.municipalities);
        setMunicipalities(result.municipalities);
      });
  });

  return (
    <div className="App">
      <p>{!status ? "Loading..." : `Stage: ${status}`}</p>
      {municipalities.map((muni) => {
        return <li>{muni.Text}</li>;
      })}
    </div>
  );
}

export default App;
