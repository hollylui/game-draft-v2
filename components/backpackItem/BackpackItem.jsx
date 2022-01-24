import Image from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";
import backpackItems from "../../assets/images/backpackitems/Main_backpack.png";

export default function BackpackItem() {
  const [correct, setCorrect] = useState(false);
  const itemsArray = ["a", "b", "c", "d", "e"];
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div>
          <Image src={backpackItems} />
        </div>

        <div className={styles.items}>
          <div className={styles.item}>a</div>
          <div className={styles.item}>b</div>
          <div className={styles.item}>c</div>
          <div className={styles.item}>d</div>
          <div className={styles.item}>e</div>

          {/* {itemsArray.map((eachItem) => {
            <div className={styles.item}>{eachItem}</div>;
          })} */}
        </div>
      </div>
    </div>
  );
}
