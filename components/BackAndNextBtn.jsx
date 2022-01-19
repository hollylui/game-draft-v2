import { useContext } from "react";

import AppContext from "../context/AppContext";

export default function BackAndNextBtn({
  backBtnHandler,
  nextBtnHandler,
  styles,
  volcano,
}) {
  const { pageIndex } = useContext(AppContext);
  return (
    <div className={styles.gridContainter}>
      {pageIndex !== 0 ? (
        <button
          className={`${styles.gridItem} ${styles.backBtn}`}
          onClick={() => backBtnHandler(volcano[pageIndex].backPage)}
        >
          Back
        </button>
      ) : (
        <div></div>
      )}
      <div></div>
      {pageIndex !== volcano.length - 1 ? (
        <button
          className={`${styles.gridItem} ${styles.startBtn}`}
          onClick={() => nextBtnHandler(volcano[pageIndex].nextPage)}
        >
          Next
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
