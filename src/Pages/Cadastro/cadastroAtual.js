import React from "react";
import '../css/reset.css'
import '../css/stylee.css'
import '../css/cadastro.css'


export default function Cadastro(){
return(


<div>
    <header class="cabecalho">
            <img class="login__usuario--perfil" src="./images/usuario--perfil.jpg" alt=""/>
    </header>
    <section class="informacoes__cadastro">
        <form action="../src/home.html">

        <input className="input__cadastro" type="text" placeholder="Nome" required/>
        <input className="input__cadastro" type="text" placeholder="Endereço" required/>
        <input className="input__cadastro" type="tel" placeholder="Telefone" required/>
        <input className="input__cadastro" type="email" placeholder="E-mail" required/>
        <input className="input__cadastro" type="password" placeholder="Senha" required/>

        <button class="input__cadastro input__cadastro--botao">Criar conta</button>
        </form>
    </section>
</div>

)}