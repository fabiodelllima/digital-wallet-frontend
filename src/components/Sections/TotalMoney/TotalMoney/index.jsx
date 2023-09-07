import styles from './style.module.scss';

export const TotalMoney = ({ cardList }) => {
  const calc = () => {
    if (cardList.length === Number(0)) {
      return Number(0);
    }

    const total = cardList.reduce((acc, card) => {
      return card.type === 'income'
        ? acc + Number(card.value)
        : acc - Number(card.value);
    }, Number(0));

    return total;
  };

  const formattedTotal = calc().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className='title-3'>Valor total:</p>
        <span className={styles.pinkBold}>{formattedTotal}</span>
      </div>
      <div className={styles.bottom}>
        <p className='body'>O valor se refere ao saldo</p>
      </div>
    </section>
  );
};
