import '../../styles/index.scss';
import { useEffect, useState } from 'react';

import { DefaultTemplate } from '../../components/Template/DefaultTemplate';
import { Form } from '../../components/Sections/Form';
import { NoTransactions } from '../../components/Sections/TotalMoney/NoTransactions';
import { List } from '../../components/Sections/List';
import { TotalMoney } from '../../components/Sections/TotalMoney/TotalMoney';

export const HomePage = () => {
  const [cardList, setCardList] = useState([]);  

  useEffect(() => {
    console.log('LISTA ATUAL:');
    console.table(cardList);
  }, [cardList]);

  const addCard = (newCard) => {    
    newCard = { ...newCard, id: crypto.randomUUID() };    
    setCardList([...cardList, newCard]);
  };

  const deleteCard = (deleteId) => {
    const newCardList = cardList.filter((card) => card.id !== deleteId);
    setCardList(newCardList);
  };

  const isTotalZero = () => {
    const total = cardList.reduce((acc, card) => acc + Number(card.value), 0);
    return total === 0;
  };

  return (
    <DefaultTemplate>
      <Form addCard={addCard} />
      {isTotalZero()
        ? <NoTransactions />
        : <>
            <TotalMoney cardList={cardList} />
            <List cardList={cardList} deleteCard={deleteCard} />
          </>
      }
    </DefaultTemplate>
  );
};
