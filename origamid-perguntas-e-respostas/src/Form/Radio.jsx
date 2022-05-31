import React from 'react';

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset className="flex m-5 flex-col border p-3 pb-10">
      <legend >{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          className="flex font-mono"
        >
          <input
            className="flex align-center"
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;