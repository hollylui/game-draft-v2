import Image from "next/image";

export default function GameContent({
  styles,
  messageImg,
  pageIndex,
  volcanoImg,
  volcanoContent,
}) {
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
        <p className={styles.message}>{volcanoContent[pageIndex].message}</p>
        <div className={styles.volcanoImg}>
          <Image src={volcanoImg} alt="volcano" />
        </div>
      </div>
    </div>
  );
}
