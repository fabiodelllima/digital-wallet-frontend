import styles from './style.module.scss';

export const NoTransactions = () => {
  return (
    <section className={styles.container}>
      <h3 className='title-3'>Resumo financeiro</h3>
      <div className={styles.empty}>
        <p className='title-2'>
          Você ainda não possui nenhum lançamento
        </p>
      </div>
    </section>
  );
};
