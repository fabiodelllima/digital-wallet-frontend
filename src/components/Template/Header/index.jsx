import logoIcon from '../../../assets/icon.png';
import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logoIcon} src={logoIcon} />
        <p className={styles.logoName}>
          <span className={styles.logoPrimary}>digital</span>
          <span className={styles.logoSecondary}>wallet</span>
        </p>
      </div>
    </header>
  );
};
