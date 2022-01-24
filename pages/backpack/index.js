import Navbar from "../../components/navbar/Navbar";
import Map from "../../components/map/Map";

import styles from "./styles.module.scss";
import BackpackBtn from "game-draft-v2/components/backpackBtn/BackpackBtn";
import BackpackItem from "game-draft-v2/components/backpackItem/BackpackItem";

export default function Backpack() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Map />
      <BackpackItem />
      {/* <BackpackBtn /> */}
    </div>
  );
}
