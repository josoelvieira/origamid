import React from "react";
import { useState } from "react";
import Button from "../components/form/Button";
import Modal from "../components/modal/Modal";

const HookUseState = () => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <h1>useState</h1>
            <div>
                <Modal modal={modal} setModal={setModal}/>
                <Button nome='Abrir' setModal={setModal}/>
            </div>
        </div>
    );
};

export default HookUseState;
