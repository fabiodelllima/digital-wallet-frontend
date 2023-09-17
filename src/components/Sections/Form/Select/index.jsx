import styles from './style.module.scss';

export const Select = ({
  id,
  type,
  setType,
  className,
  required,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        Tipo de valor
      </label>
      <select
        name={id}
        id={id}
        value={type}
        onChange={(event) => setType(event.target.value)}
        className={className}
        required={required}
      >
        <option value=''>Selecione uma opção</option>
        <option value='income'>Entrada</option>
        <option value='expense'>Despesa</option>
      </select>
    </div>
  );
};
