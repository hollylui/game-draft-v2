import Image from "next/image";

export default function GameLanding({
  gameName,
  styles,
  BgImage,
  startHandler,
}) {
  return (
    <div className={styles.containter}>
      {/* background image with layout="fill" */}
      <Image
        className={styles.landingImage}
        src={BgImage}
        alt="volcano"
        objectFit="cover"
        layout="fill"
        quality="50"
      />

      <div className={styles.landingText}>
        <h1>{gameName}</h1>
        <div className={styles.gridContainter}>
          <button className={styles.gridItem}>Exit</button>
          <button
            className={`${styles.gridItem} ${styles.startBtn}`}
            onClick={() => startHandler()}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
