import { useState } from 'react';
import styles from './style.module.scss';

export const Form = () => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  const submit = (event) => {
    event.preventDefault();
    console.log({ description, value });
    setDescription('');
    setValue('');
  };

  console.log(description);
  console.log(value);

  return (
    <form 
      onSubmit={submit}
      className={styles.container}
    >
      <label htmlFor='description'>Descrição</label>
      <input 
        className={styles.input} 
        type="text" 
        name='description'
        id='description'
        value={description}
        placeholder='Descrição'
        onChange={(event) => setDescription(event.target.value)}
      />

      <label htmlFor='value'>Valor (R$)</label>
      <input 
        className={styles.input} 
        type="text" 
        name='value'
        id='value'
        value={value}
        placeholder='R$'
          onChange={(event) => setValue(event.target.value)}
      />
      <label htmlFor='###'>Tipo de valor</label>
      <select className={styles.input} id='###'>
        <option value=''>Selecione uma opção</option>
        <option value='e'>Entrada</option>
      </select>

      <button type='submit'>Inserir valor</button>
    </form>
  );
};