import { useContext, useEffect } from "react";
import Head from "next/head";

import messageImg from "../../../assets/images/forAllGames/messageBubble.png";
import volcanoImg from "../../../assets/images/volcano/volcano_icon.png";
import BackAndNextBtn from "../../../components/BackAndNextBtn";
import GameContentMG from "../../../components/GameContentMG";
import AppContext from "../../../context/AppContext";
import clientPromise from "../../../lib/mongodb";
import styles from "./styles.module.scss";

export default function PageOne({ volcano }) {
  const { pageIndex, setPageIndex, heroName, age } = useContext(AppContext);

  //   next btn page handler
  const nextBtnHandler = () => {
    setPageIndex(pageIndex + 1);
    if (pageIndex === 1) {
      localStorage.setItem("heroName", heroName);
    }
    if (pageIndex === 2) {
      localStorage.setItem("age", age);
    }
  };

  // back btn page handler
  const backBtnHandler = () => {
    setPageIndex(pageIndex - 1);
  };

  const contentProps = {
    styles,
    messageImg,
    volcanoImg,
    volcano,
  };

  const btnProps = {
    backBtnHandler,
    nextBtnHandler,
    styles,
    volcano,
  };

  // useEffect(() => {
  //   localStorage.setItem("heroName", heroName);
  // }, [heroName]);

  // useEffect(() => {
  //   localStorage.setItem("age", age);
  // }, [age]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Volcano: Start</title>
        <meta name="description" content="Children Education App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GameContentMG {...contentProps} />

      {/* buttons */}
      <BackAndNextBtn {...btnProps} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("final_project");
    const data = await db.collection("volcano").find({}).toArray();
    const volcano = JSON.parse(JSON.stringify(data));

    return {
      props: { volcano },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
