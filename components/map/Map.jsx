import Image from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";
import littleMap from "../../assets/images/map/little_map.png";
import largeMap from "../../assets/images/map/large_map.png";

export default function Map() {
  const [expand, setExpand] = useState(false);

  const mapExpand = () => {
    setExpand(true);
  };

  const mapClose = () => {
    setExpand(false);
  };

  return (
    <div className={styles.container}>
      {!expand && (
        <div className={styles.smallMap}>
          <div>
            <Image src={littleMap} alt="little map" objectFit="fill" />
          </div>

          <div
            className={`${styles.expandBtn} ${styles.btn}`}
            onClick={mapExpand}
          >
            &#10006;
          </div>
        </div>
      )}

      {expand && (
        <div className={styles.largelMap}>
          <div>
            <Image src={largeMap} alt="large map" objectFit="fill" />
          </div>
          <div
            className={`${styles.closeBtn} ${styles.btn}`}
            onClick={mapClose}
          >
            &#10006;
          </div>
        </div>
      )}
    </div>
  );
}
