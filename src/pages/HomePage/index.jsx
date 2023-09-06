import '../../styles/index.scss';
import styles from './style.module.scss';
import { useState } from 'react';

import { DefaultTemplate } from '../../components/Template/DefaultTemplate';
import { Form } from '../../components/Sections/Form';
import { NoTransactions } from '../../components/Sections/TotalMoney/NoTransactions';
import { TotalMoney } from '../../components/Sections/TotalMoney/TotalMoney';
import { List } from '../../components/Sections/List';

export const HomePage = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = (newCard) => {
    newCard = { ...newCard, id: crypto.randomUUID() };
    setCardList([...cardList, newCard]);
  };

  const deleteCard = (deleteId) => {
    const newCardList = cardList.filter(
      (card) => card.id !== deleteId
    );
    setCardList(newCardList);
  };

  const hasNoTransactions = () => {
    const total = cardList.reduce(
      (acc, card) => acc + Number(card.value),
      0
    );
    return total === 0;
  };

  return (
    <DefaultTemplate>
      <div className={styles.leftContainer}>
        <Form addCard={addCard} />
        {hasNoTransactions() ? null : (
          <TotalMoney cardList={cardList} />
        )}
      </div>

      <div className={styles.rightContainer}>
        {hasNoTransactions() ? (
          <NoTransactions />
        ) : (
          <>
            <List cardList={cardList} deleteCard={deleteCard} />
          </>
        )}
      </div>
    </DefaultTemplate>
  );
};
