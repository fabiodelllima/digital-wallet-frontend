import styles from './style.module.scss';
import { Header } from '../Header';

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
};