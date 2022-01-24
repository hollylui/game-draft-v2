import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import GameContentMG from "../../../components/gameContentMG/GameContentMG";
import AppContext from "../../../context/AppContext";
import clientPromise from "../../../lib/mongodb";
import styles from "./styles.module.scss";
import Navbar from "game-draft-v2/components/navbar/Navbar";
import BackpackBtn from "game-draft-v2/components/backpackBtn/BackpackBtn";

export default function PageOne({ volcano }) {
  const { pageIndex, setPageIndex, heroName, age } = useContext(AppContext);
  const router = useRouter();

  //! handlers ---------------------------------------------------
  const nextBtnHandler = () => {
    setPageIndex(pageIndex + 1);
    if (pageIndex === 1) localStorage.setItem("heroName", heroName);
    if (pageIndex === 2) localStorage.setItem("age", age);
    localStorage.setItem("_id", volcano[pageIndex + 1]._id);
  };

  const backBtnHandler = () => {
    setPageIndex(pageIndex - 1);
    localStorage.setItem("_id", volcano[pageIndex - 1]._id);
  };

  const volcanoHomeHandler = () => {
    router.push("/volcano");
  };

  //! props -----------------------------------------------------
  const contentProps = {
    volcano,
  };

  const btnProps = {
    backBtnHandler,
    nextBtnHandler,
    volcanoHomeHandler,
    volcano,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Volcano: Start</title>
        <meta name="description" content="Children Education App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <GameContentMG {...contentProps} />
      <BackpackBtn {...btnProps} />
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
