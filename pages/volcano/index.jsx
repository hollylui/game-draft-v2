import { useRouter } from "next/router";
import Head from "next/head";

import volcanoBg from "../../assets/images/volcano/volcano_bg.jpg";
import GameLanding from "../../components/GameLanding";
import styles from "./styles.module.scss";

export default function Volcano() {
  const router = useRouter();
  const startHandler = () => {
    router.push("/volcano/pages");
  };

  return (
    <>
      <Head>
        <title>Volcano</title>
        <meta name="description" content="Children Education App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GameLanding
        gameName={"volcano animal rescue"}
        styles={styles}
        BgImage={volcanoBg}
        startHandler={startHandler}
      />
    </>
  );
}
