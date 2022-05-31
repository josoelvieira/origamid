import "./App.css";
import React from "react";

// import Input2 from './components/Input2';
// import Select from './components/Select';
// import Textarea from './components/Textarea';
// import Radio from './components/Radio';
// import Checkbox from './components/Checkbox';
// import Checkbox2 from './components/Checkbox2';
// import CheckboxEx from './components/CheckboxEx';
import Input from "./form/Input";
import Select from "./form/Select";
import Checkbox from "./form/Checkbox";
import Validacao from "./components/Validacao";
import { useState } from "react";
import Radio from "./form/Radio";
import ValidacaoUseForm from "./components/ValidacaoUseForm";

function App() {
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [produto, setProduto] = useState("");

    const [cor, setCor] = useState("Azul");

    const [fruta, setFruta] = useState([]);

    const [termos, setTermos] = useState([]);

    return (
        <div className="App">
            {/* <Input2/>
      <hr />
      <Textarea/>
      <hr />
      <Select />
      <hr />
      <Radio/>
      <hr />
      <Checkbox />
      <hr />
      <Checkbox2/>
      <hr />
      <CheckboxEx/> */}
            <form action="">
                <h2>useForm</h2>
                <ValidacaoUseForm />

                <h2>Validacao</h2>
                <Validacao />

                <h2>Checkbox item unico</h2>

                <Checkbox
                    options={["Aceito os termos"]}
                    value={termos}
                    setValue={setTermos}
                />
                <h2>Checkbox</h2>
                <Checkbox
                    options={["Maca", "Banana", "Pera"]}
                    value={fruta}
                    setValue={setFruta}
                />
                <h2>Radio</h2>
                <Radio
                    options={["Azul", "Amarelo", "Verde"]}
                    value={cor}
                    setValue={setCor}
                />
                <hr />

                <h2>Select</h2>
                <Select
                    options={["Notebook", "Tablet", "Smartphone"]}
                    value={produto}
                    setValue={setProduto}
                />
                <hr />

                <h2>Input</h2>
                <Input
                    label="Nome:"
                    type="text"
                    id="nome"
                    value={nome}
                    setValue={setNome}
                />
                <Input
                    label="Email:"
                    type="email"
                    id="email"
                    value={email}
                    setValue={setEmail}
                    required
                />
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default App;
