import styles from './style.module.scss';

export const Card = ({ id, description, value, type, deleteCard }) => {
  const formattedValue = Number(value).toLocaleString(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  );

  return (
    <li className={styles.container}>
      <h3><strong>{description}</strong></h3>
      <p>Tipo de valor aqui {type}</p>
      <span>{formattedValue}</span>
      <button onClick={() => deleteCard(id)}>Excluir</button>
    </li>
  );
};
