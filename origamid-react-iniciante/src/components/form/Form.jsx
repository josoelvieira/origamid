import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = (props) => {

function render () {
    const ativo= true
            if(ativo) {
            return (
                <>
                    <form>
                <p>
                    <Input type="text" id="nome" label="Nome"/>
                </p>
                <p>
                    <Input type="Email" id="email" label="Email"/>
                </p>
                
                <Button nome="Enviar" />
            </form>
                </>
            )} else {
                return null
            }}
            
    return ( {render} );
};

export default Form;
