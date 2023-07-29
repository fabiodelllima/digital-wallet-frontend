import styles from './style.module.scss';

export const TotalMoney=()=>{
  return(
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.bold}>Valor total:</p>
        <span className={styles.pinkBold}>R$ 8184,00</span>
      </div>
      <div className={styles.bottom}>
        <p>O valor se refere ao saldo</p>
      </div>
    </section>
  );
};
