import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>o melhor para você ouvir, sempre</p>

      <span>Ter, 21 abril</span>
    </header>
  );
}

export default Header;