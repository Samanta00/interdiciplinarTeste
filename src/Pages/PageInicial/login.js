import React from "react";
import Home from "../Cadastro/cadastro";
import '../css/reset.css';
import '../css/stylee.css';
import '../css/login-home.css'
import logo from '../PageHome/logo-ONG-projeto-maos-e-patas.png'
import { Link } from "react-router-dom";

//Pagina Inicial Para Login
export default function PageInicial(){
    return(
        <div>
            <header className="home--cabecalho">
                <img className="logo--home" src={logo} alt="Logo do mãos e patas"/>
            </header>

            <section className="login__inicial--home">
                <button className="botoes__acesso botoes__acesso--login"><Link to='/Home'>Login </Link></button>
                <button className="botoes__acesso botoes__acesso--cadastro"><Link to='/cadastro'>Cadastrar-se</Link></button>
            </section>
        </div>

    )
}