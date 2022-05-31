import React, { useState } from "react";
import Input from "../form/Input";

const Validacao = () => {
    const [cep, setCep] = useState("");
    const [error, setError] = useState(null);

    function valideCep(value) {
        if (value.length === 0) {
            setError("O CEP é obrigatório");
            return false;
        } else if (!/^\d{5}-?\d{3}$/.test(value)) {
            setError("Precisa ser um CEP válido");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function handleBlur({ target }) {
        valideCep(target.value);
    }
    

    return (
        <form action="">
            <Input
                label="CEP"
                id="cep"
                type="text"
                placeholder="88888-888"
                value={cep}
                onBlur={handleBlur}
                setValue={setCep}
            />
            {error && <span>{error}</span>}
        </form>
    );
};

export default Validacao;
