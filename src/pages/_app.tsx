import "../styles/global.scss";

import { Header } from "../component/Header/Index";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
