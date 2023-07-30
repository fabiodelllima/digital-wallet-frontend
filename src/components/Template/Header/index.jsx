import logo from '../../../assets/logo.svg';
import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='Logo' />
      </div>
    </header>
  );
};
