import styles from './style.module.scss';

export const NoTransactions = () => {
  return (
    <section className={styles.container}>
      <h3>Resumo financeiro</h3>
      <div className={styles.containerEmpty}>
        <p>Você ainda não possui nenhum lançamento</p>
      </div>
    </section>
  );
};
