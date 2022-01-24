import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";

import styles from "./styles.module.scss";

let buttons;

export default function NameForm() {
  const { age, setAge } = useContext(AppContext);

  const ageHandler = async (e) => {
    await setAge(e.target.innerText);

    for (let button of buttons) {
      if (button.innerText == age) {
        button.classList.add(styles.active);
      } else {
        button.classList.remove(styles.active);
      }
    }
  };

  useEffect(() => {
    buttons = document.getElementsByTagName("button");
  }, []);

  return (
    <>
      <div>
        <button onClick={ageHandler} className={styles.button}>
          1
        </button>
        <button onClick={ageHandler} className={styles.button}>
          2
        </button>
        <button onClick={ageHandler} className={styles.button}>
          3
        </button>
      </div>
      <div>
        <button onClick={ageHandler} className={styles.button}>
          4
        </button>
        <button onClick={ageHandler} className={styles.button}>
          5
        </button>
        <button onClick={ageHandler} className={styles.button}>
          6
        </button>
      </div>
      <div>
        <button onClick={ageHandler} className={styles.button}>
          7
        </button>
        <button onClick={ageHandler} className={styles.button}>
          8
        </button>
        <button onClick={ageHandler} className={styles.button}>
          9+
        </button>
      </div>
    </>
  );
}
