import styles from './style.module.scss';

export const NoTransactions = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Resumo financeiro</h3>
      <div className={styles.empty}>
        <p>Você ainda não possui nenhum lançamento</p>
      </div>
    </section>
  );
};
