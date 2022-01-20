const dotenv = require("dotenv").config();
import { useState } from "react";
import "../styles/globals.css";
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [heroName, setHeroName] = useState("");
  const [age, setAge] = useState("");
  const [music, setMusic] = useState(true);
  const [volume, setVolume] = useState(0.5);

  return (
    <AppContext.Provider
      value={{
        pageIndex,
        setPageIndex,
        heroName,
        setHeroName,
        age,
        setAge,
        music,
        setMusic,
        volume,
        setVolume,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
