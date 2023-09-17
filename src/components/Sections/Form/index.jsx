import styles from './style.module.scss';
import { useState } from 'react';
import { Input } from './Input';
import { Select } from './Select';

export const Form = ({ addCard }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const newCard = { description, value, type };

    {
      type === 'income' ? setType('income') : setType('expense');
    }

    addCard(newCard);
    setDescription('');
    setValue('');
  };

  return (
    <form onSubmit={submit} className={styles.container}>
      <Input
        label='Descrição'
        placeholder='Digite aqui sua descrição'
        type='text'
        id='description'
        value={description}
        setValue={setDescription}
        className={styles.input}
        required={true}
        helperMsg='Ex: Compra de roupas'
      />
      <Input
        label='Valor (R$)'
        placeholder='1'
        type='number'
        id='value'
        value={value}
        setValue={setValue}
        className={styles.input}
        required={true}
      />
      <Select
        name='type'
        id='type'
        value={type}
        setType={setType}
        className={`
          ${styles.input} 
          ${styles.select}`}
        required={true}
      />
      <button className='button full' type='submit'>
        Inserir valor
      </button>
    </form>
  );
};
