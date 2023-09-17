import styles from './style.module.scss';

export const Input = ({
  id,
  label,
  placeholder,
  type,
  value,
  setValue,
  className,
  required,
  helperMsg,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={className}
        required={required}
      />
      <span className={styles.helper}>{helperMsg}</span>
    </div>
  );
};
