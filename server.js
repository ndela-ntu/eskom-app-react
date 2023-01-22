import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/GetStatus", (req, res) => {
  const customHeaders = {
    "Content-Type": "application/json",
  };

  fetch(`https://loadshedding.eskom.co.za/LoadShedding/GetStatus`, {
    method: "GET",
    headers: customHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      res.json({ status: data });
    });
});

app.get("/api/GetMunicipalities", (req, res) => {
  const customHeaders = {
    "Content-Type": "application/json",
  };
  fetch(
    "https://loadshedding.eskom.co.za/LoadShedding/GetMunicipalities/?Id=1",
    {
      method: "GET",
      headers: customHeaders,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      res.json({ municipalities: data });
    });
});

app.listen(5000, () => console.log("Listening on port 5000"));
