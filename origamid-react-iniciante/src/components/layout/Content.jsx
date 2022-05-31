import React from "react";
import Form from "../form/Form";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Menu from "./Menu";
import Produtos from "./Produtos";
import HookUseState from "../../hooks/HookUseState";
import HookEx from "../../hooks/HookEx";
import HookUseEffect from "../../hooks/HookUseEffect";
import HookEx1 from "../../hooks/HookEx1";
import HookuseRef from "../../hooks/HookuseRef";
import HookMemo from "../../hooks/HookMemo";
import HookCallback from "../../hooks/HookCallback";
import Hookcontext from "../../hooks/HookContext";
import { GlobalStorage } from "../../hooks/GlobalContext";
import HookCuston from '../../hooks/HookCuston';



const content = () => {
  const { pathname } = window.location;
  let Pagina;
  console.log(pathname);

        if (pathname === "/produtos") {
            Pagina = Produtos;
        } else {
            Pagina = Form;
        }


    return (
        <>
        
            <Header />
            <Menu />
            <Pagina />
            <hr />
            <HookUseState />
            <hr />
            <HookEx/>
            <hr />
            <HookUseEffect/>
            <hr />
            <HookEx1/>
            <hr />
            <HookEx1 />
            <hr />
            <HookuseRef/>
            <hr />
            <HookMemo/>
            <hr />
            <HookCallback/>
            <hr />
            <GlobalStorage>
            <Hookcontext />
            </GlobalStorage>
            <hr />
            <HookCuston/>
            <Footer />
        </>
    );
};

export default content;
