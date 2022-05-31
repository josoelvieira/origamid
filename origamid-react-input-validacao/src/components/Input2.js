import React, { useState } from "react";

const formFields = [
    {
        id: "nome",
        label: "Nome",
        type: "text",
    },
    {
        id: "email",
        label: "Email",
        type: "email",
    },
    {
        id: "senha",
        label: "Senha",
        type: "password",
    },
    {
        id: "cep",
        label: "CEP",
        type: "text",
    },
    {
        id: "rua",
        label: "Rua",
        type: "text",
    },
    {
        id: "numero",
        label: "Numero",
        type: "number",
    },
    {
        id: "bairro",
        label: "Bairro",
        type: "text",
    },
    {
        id: "cidade",
        label: "Cidade",
        type: "text",
    },
    {
        id: "estado",
        label: "Estado",
        type: "text",
    },
];
const forms = formFields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
})
const Inpu2 = () => {
    const [form, setForm] = useState({
        forms
    });
    const [response, setResponse] = useState(null);
    
    function handleChange({target}) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(e) {
      e.preventDefault();
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }).then((response) => {
        setResponse(response);
      });
    }

    return (
        <div className="exerc">
            <h1>Exercicios</h1>
            <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}

      {response && response.ok && <p>Formulario Enviado</p> }
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Inpu2;
