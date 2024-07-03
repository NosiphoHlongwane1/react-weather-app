import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="johannesburg" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/NosiphoHlongwane1/react-weather-app.git" target="_blank">
            Nosipho Hlongwane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NosiphoHlongwane1/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}