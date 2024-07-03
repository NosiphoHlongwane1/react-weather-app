import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="johannesburg" />

        <footer>
        <p class="text-white">
        This project is developed by Nosipho Hlongwane and is available on
        <a
          href="https://github.com/NosiphoHlongwane1/react-weather-app"
          target="_blank"
          class="links"
          title="Portfolio GitHub link"
          >GitHub</a
        >
      </p>
        </footer>
  );
}
