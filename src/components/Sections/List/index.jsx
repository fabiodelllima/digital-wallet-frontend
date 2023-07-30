import { Card } from './Card';
import styles from './style.module.scss';

export const List = ({ cardList, deleteCard }) => {
  return (
    <ul className={styles.container}>
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
  );
};
