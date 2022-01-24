import Image from "next/image";
import { useContext } from "react";

import styles from "./styles.module.scss";
import AppContext from "game-draft-v2/context/AppContext";
import BackImg from "../../assets/images/backpackBtn/back.png";
import NextImg from "../../assets/images/backpackBtn/next.png";
import BackpackImg from "../../assets/images/backpackBtn/Main_Backpack.png";

export default function BackpackBtn({
  backBtnHandler,
  nextBtnHandler,
  volcanoHomeHandler,
  volcano,
}) {
  const { pageIndex } = useContext(AppContext);

  return (
    <div className={styles.container}>
      {/* back button */}

      <div
        className={styles.btnImg}
        onClick={() =>
          pageIndex === 0
            ? volcanoHomeHandler()
            : backBtnHandler(volcano[pageIndex].backPage)
        }
      >
        <Image src={BackImg} />
      </div>

      {/* backpack items */}
      <div className={styles.backpageImg}>
        <Image src={BackpackImg} />
      </div>

      {/* next button */}
      {pageIndex !== volcano.length - 1 && (
        <div
          className={styles.btnImg}
          onClick={() => nextBtnHandler(volcano[pageIndex].nextPage)}
        >
          <Image src={NextImg} />
        </div>
      )}
    </div>
  );
}
