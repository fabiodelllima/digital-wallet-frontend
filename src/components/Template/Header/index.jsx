import logo from '../../../assets/logo.svg';
import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo' />
    </header>
  );
};
