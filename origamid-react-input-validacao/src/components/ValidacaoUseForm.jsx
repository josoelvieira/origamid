import Input1 from "../form/Input1";
import useForm from '../Hook/useForm';

const ValidacaoUseform = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      if (cep.validate() && email.validate() && nome.validate()) {
        console.log('Enviar');
      } else {
        console.log('Não enviar');
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <Input1 label="Nome" id="nome" type="text" {...nome} />
        <Input1 label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
        <Input1
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />
        <Input1 label="Email" id="email" type="email" {...email} />
        <button>Enviar</button>
      </form>
    );
  };

  export default ValidacaoUseform