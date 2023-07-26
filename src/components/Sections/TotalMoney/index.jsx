import styles from './style.module.scss';

export const TotalMoney = () => {
  return (
    <section className={styles.container}>
      <h3>Resumo financeiro</h3>
      <h2>Você ainda não possui nenhum lançamento</h2>
    </section>
  );
};
