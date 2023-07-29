import styles from './style.module.scss';
import { useState } from 'react';
import { Input } from './Input';

export const Form = ({ addCard }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  const submit = (event) => {
    event.preventDefault();
    const newCard = { description, value };
    addCard(newCard);
    setDescription('');
    setValue(0);
  };

  return (
    <form onSubmit={submit} className={styles.container}>
      <Input
        label='Descrição' 
        placeholder='Descrição'
        type='text'
        id='description'
        value={description}
        setValue={setDescription}
        className={styles.input}
      />
      <Input
        label='Valor (R$)' 
        placeholder='R$'
        type='text'
        id='value'
        value={value}
        setValue={setValue}
        className={styles.input}
      />

      <label htmlFor='###'>Tipo de valor</label>
      <select className={styles.input} id='###'>
        <option value=''>Selecione uma opção</option>
        <option value='e'>Entrada</option>
      </select>

      <button className='button full' type='submit'>Inserir valor</button>
    </form>
  );
};
