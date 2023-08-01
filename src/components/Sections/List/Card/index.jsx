import styles from './style.module.scss';

export const Card = ({ id, description, value, type, deleteCard }) => {
  const formattedValue = Number(value).toLocaleString(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  );

  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <h3 className='title-2'>{description}</h3>
        <span className='body'>{formattedValue}</span>
      </div>
      <div className={styles.bottom}>
        <p className='body'>Tipo de valor {type}</p>
        <button
          className={styles.button}
          onClick={() => deleteCard(id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
};
