import { Card } from './Card';
import styles from './style.module.scss';

export const List = ({ cardList }) =>{
  // if (!cardList) {
  //   return console.log('TESTE');
  // }

  return (
    <ul className={styles.container}>
      {cardList.map((card) => (
        <Card
          key={card.id} 
          description={card.description}
          type={card.type}
          value={card.value}
        />
      ))}      
    </ul>
  );
};
