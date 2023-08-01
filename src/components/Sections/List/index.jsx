import { Card } from './Card';
import styles from './style.module.scss';

export const List = ({ cardList, deleteCard }) => {
  return (
    <section className={styles.container}>
      <p className='title-3'>Resumo financeiro</p>
      <ul className={styles.list}>
        {cardList.map((card) => (
          <Card
            key={card.id}
            id={card.id} 
            description={card.description}
            type={card.type}
            value={card.value}
            deleteCard={deleteCard}
          />
        ))}
      </ul>
    </section>
  );
};
