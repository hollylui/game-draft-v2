import Image from "next/image";

import { useContext } from "react";

import AppContext from "../../context/AppContext";
import NameForm from "../nameForm/NameForm";
import Age from "../age/Age";
import messageImg from "../../assets/images/forAllGames/Large_speech_box.png";
import volcanoImg from "../../assets/images/volcano/volcano_icon.png";
import styles from "./styles.module.scss";

export default function GameContent({ volcano }) {
  const { pageIndex, heroName } = useContext(AppContext);
  const message = volcano[pageIndex].message;

  return (
    <div className={styles.position}>
      {/* message */}
      <div className={styles.messageImg}>
        <div className={styles.image}>
          <Image
            src={messageImg}
            alt="volcano"
            quality="50"
            objectFit="cover"
          />
        </div>
        <div className={styles.message}>
          {pageIndex === 0 && message}
          {pageIndex === 1 && (
            <>
              <div>{message}</div>
              <NameForm />
            </>
          )}
          {pageIndex === 2 && (
            <>
              <p style={{ margin: 0, padding: 0 }}>Hello {heroName}</p>
              <p style={{ margin: 0, padding: 0 }}>{message}</p>
              <Age />
            </>
          )}
          {pageIndex === 3 && message}
        </div>

        <div className={styles.volcanoImg}>
          <Image src={volcanoImg} alt="volcano" />
        </div>
      </div>
    </div>
  );
}
