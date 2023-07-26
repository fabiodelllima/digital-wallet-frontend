import styles from './style.module.scss';

export const Form = () => {
  return (
    <section className={styles.container}>
      <label htmlFor='#'>Descrição</label>
      <input className={styles.input} type="text" id='#' />

      <label htmlFor='##'>Valor (R$)</label>
      <input className={styles.input} type="text" id='##'/>

      <label htmlFor='###'>Tipo de valor</label>
      <select className={styles.input} id='###'>
        <option value=''>Selecione uma opção</option>
        <option value='e'>Entrada</option>
      </select>

      <button>Inserir valor</button>
    </section>
  );
};