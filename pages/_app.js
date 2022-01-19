const dotenv = require("dotenv").config();
import { useState } from "react";
import "../styles/globals.css";
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [heroName, setHeroName] = useState("");
  const [age, setAge] = useState("");

  return (
    <AppContext.Provider
      value={{
        pageIndex,
        setPageIndex,
        heroName,
        setHeroName,
        age,
        setAge,
      }}
    >
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
