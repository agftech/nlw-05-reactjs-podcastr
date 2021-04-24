import "../styles/global.scss";
import styles from "../styles/app.module.scss";

import { Header } from "../component/Header/Index";
import { Player } from "../component/Player/Index";
import { PlayerContext } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider value={"TEST"}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
