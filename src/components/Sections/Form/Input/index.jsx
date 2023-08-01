export const Input = ({ id, label, placeholder, type, value, setValue, className, required }) => {
  return(
    <>
      <label htmlFor={id}>{label}</label>
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
    </>
  );
};
