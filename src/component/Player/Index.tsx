import Image from "next/image";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

import styles from "./styles.module.scss";

export function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>

          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>

          <button className={styles.playbutton}>
            <img src="/play.svg" alt="Tocar" />
          </button>

          <button>
            <img src="/play-next.svg" alt="Tocat proxima" />
          </button>

          <button>
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Player;
