import '../../styles/index.scss';
import { useState } from 'react';

import { DefaultTemplate } from '../../components/Template/DefaultTemplate';
import { Form } from '../../components/Sections/Form';
import { TotalMoney } from '../../components/Sections/TotalMoney';
import { List } from '../../components/Sections/List';

export const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [id, setId] = useState(1);

  const addCard = (newCard) => {
    newCard.id = id;
    setCards([...cards, newCard]);
    setId(id + 1);

    console.log(cards);
  };

  return (
    <DefaultTemplate>
      <Form addCard={addCard} />
      <TotalMoney />
      <List cardList={cards} />
    </DefaultTemplate>
  );
};
