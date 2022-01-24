import { useContext } from "react";

import AppContext from "../../context/AppContext";
import styles from "./styles.module.scss";

export default function NameForm() {
  const { setHeroName } = useContext(AppContext);

  const nameHanlder = (e) => {
    setHeroName(e.target.value);
  };
  return (
    <form action="">
      <input
        type="text"
        name="heroName"
        id="heroName"
        onChange={nameHanlder}
        className={styles.input}
      />
    </form>
  );
}
