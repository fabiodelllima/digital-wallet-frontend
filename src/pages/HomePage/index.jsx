import '../../styles/index.scss';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import { DefaultTemplate } from '../../components/Template/DefaultTemplate';
import { Form } from '../../components/Sections/Form';
import { NoTransactions } from '../../components/Sections/TotalMoney/NoTransactions';
import { List } from '../../components/Sections/List';
import { TotalMoney } from '../../components/Sections/TotalMoney/TotalMoney';

export const HomePage = () => {
  const [cardList, setCardList] = useState([]);
  // const [id, setId] = useState(1);

  const addCard = (newCard) => {
    // console.log(newCard);
    newCard = { ...newCard, id: crypto.randomUUID() };
    // newCard = { ...newCard, id: uuidv4() };
    // newCard.id = id;
    setCardList([...cardList, newCard]);
    // setId(id + 1);

    console.log('LISTA:');
    console.log(cardList);
    // console.log(newCard);
  };

  const deleteCard = (deleteId) => {
    const newCardList = cardList.filter((card) => card.id !== deleteId);
    // console.log(newCardList);
    setCardList(newCardList);
    console.log('LISTA APÓS DELETE:');
    console.log(cardList);
    // console.log(newCardList);
  };

  return (
    <DefaultTemplate>
      <Form addCard={addCard} />
      <TotalMoney cardList={cardList} />
      <List cardList={cardList} deleteCard={deleteCard} />
      {/* <NoTransactions /> */}
    </DefaultTemplate>
  );
};
