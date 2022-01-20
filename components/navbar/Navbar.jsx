import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import musicOn from "../../assets/images/navbar/music_on.png";
import musicOff from "../../assets/images/navbar/music_off.png";
import volumeDown from "../../assets/images/navbar/volume-down.png";
import volumeUp from "../../assets/images/navbar/volume-up.png";
import pauseMusic from "../../assets/images/navbar/pause-button.png";
import AppContext from "../../context/AppContext";
import styles from "./styles.module.scss";
import backgroundMusic from "../../assets/audio/navbar/MonkeysSpinningMonkeys.mp3";
import menu from "../../assets/images/navbar/menu.png";
import item1 from "../../assets/images/navbar/item1.png";
import item2 from "../../assets/images/navbar/item2.png";

let musicItem;

export default function Navbar() {
  const { music, setMusic, volume, setVolume } = useContext(AppContext);
  const [pause, setPause] = useState(false);

  //! Nextjs has no window/document. It needs to place it in useEffect().
  useEffect(() => {
    musicItem = document.getElementsByClassName("backgroundMusic")[0];
    musicItem.play();
  }, []);

  const musicHandler = () => setMusic(!music);

  const volumnDonwHandler = () => {
    if (volume > 0) setVolume(volume - 0.2);
    if (volume <= 0.2) setVolume(0);
    musicItem.volume = volume;
  };

  const volumnUpHandler = () => {
    if (volume < 1) setVolume(volume + 0.2);
    if (volume >= 0.8) setVolume(1);
    musicItem.volume = volume;
  };

  const musicOffHandler = () => (musicItem.volume = 0);
  const musicOnHandler = () => (musicItem.volume = volume);
  const musicPauseHandler = () => {
    setPause(!pause);
    pause ? musicItem.play() : musicItem.pause();
  };

  return (
    <>
      {/* background music */}
      <audio loop className="backgroundMusic">
        <source src={backgroundMusic} />
      </audio>

      <div className={styles.container}>
        {/* music control */}
        <div className={styles.musicController}>
          {/* Mute or unmute */}
          <div className={styles.musicContainer} onClick={musicHandler}>
            {music ? (
              <Image src={musicOn} alt="music on" onClick={musicOffHandler} />
            ) : (
              <Image src={musicOff} alt="music off" onClick={musicOnHandler} />
            )}
          </div>

          {/* pause */}
          <div
            className={
              pause
                ? `${styles.musicContainer} ${styles.pauseControl}`
                : `${styles.musicContainer}  `
            }
          >
            <Image
              src={pauseMusic}
              alt="pause music"
              onClick={musicPauseHandler}
            />
          </div>

          {/* volume control */}
          <div className={styles.volumeContainer}>
            <Image
              className={styles.volumnDonw}
              src={volumeDown}
              alt="volume down"
              onClick={volumnDonwHandler}
            />
            <Image src={volumeUp} alt="volumn up" onClick={volumnUpHandler} />
          </div>
        </div>

        <div className={styles.dropdown}>
          <Image src={menu} alt="menu" className={styles.dropdownBtn} />
          <div className={`${styles.dropdownContent} ${styles.hidden}`}>
            <div className={styles.item}>
              <Image src={item1} alt="item1" />
            </div>
            <div className={styles.item}>
              <Image src={item2} alt="item2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
