export const Select = ({ id, type, setType, className, required }) => {  
  return (
    <>
      <label htmlFor={id}>Tipo de valor</label>
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
    </>
  );
};
