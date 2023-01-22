const FormRow = ({ type, name, value, handleChange, placeholder }) => {
  return (
    <div className="border-b border-gray-500 py-2">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        className="appearance-none bg-transparent border-none w-full text-gray-200 text-2xl py-1 px-2 leading-tight focus:outline-none "
      />
    </div>
  );
};

export default FormRow;
