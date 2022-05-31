import React from "react";

const Select = ({ options, produto, setValue, ...props}) => {
    return (
        <select value={produto} onChange={(({target}) => setValue(target.value))} {...props}>
            <option value="" disabled>Selecione</option>

            {options.map((option) => (
                <option key={option} 
                value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
