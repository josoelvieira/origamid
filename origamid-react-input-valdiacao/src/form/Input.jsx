import React from "react";

const Input = ({ id, label, type, value, setValue, ...props }) => {
    return (
        <>
            <label>{label} </label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={({ target }) => setValue(target.value)}
                {...props}
            />
        </>
    );
};

export default Input;
