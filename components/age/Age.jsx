import { useContext } from "react";
import AppContext from "../../context/AppContext";

import styles from "./styles.module.scss";

export default function NameForm() {
  const { setAge } = useContext(AppContext);

  const ageHandler = (e) => {
    setAge(e.target.innerText);
  };

  return (
    <p>
      <div>
        <span onClick={ageHandler} className={styles.span}>
          1
        </span>
        <span onClick={ageHandler} className={styles.span}>
          2
        </span>
        <span onClick={ageHandler} className={styles.span}>
          3
        </span>
      </div>
      <div>
        <span onClick={ageHandler} className={styles.span}>
          4
        </span>
        <span onClick={ageHandler} className={styles.span}>
          5
        </span>
        <span onClick={ageHandler} className={styles.span}>
          6
        </span>
      </div>
      <div>
        <span onClick={ageHandler} className={styles.span}>
          7
        </span>
        <span onClick={ageHandler} className={styles.span}>
          8
        </span>
        <span onClick={ageHandler} className={styles.span}>
          9+
        </span>
      </div>
    </p>
  );
}
