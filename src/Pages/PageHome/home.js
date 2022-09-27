import React from "react";
import '../css/reset.css'
import '../css/stylee.css'
import logo from './logo-ONG-projeto-maos-e-patas.png'
import { Link } from "react-router-dom";

export default function Home(){
return(

    <div>
        <header data-aos="flip-left" >
            <img class="logo__maos--patas" src={logo} alt="Logo do mãos e patas"/>
        </header>
        <main>
            <section>
                <div>
                    
                    <form action="" className="formulario" data-aos="fade-right">
                        <input className="input_email input_login" type="text" placeholder="E-mail"/>
                        <input className="input_senha input_login" type="text" placeholder="Senha"/>
                        <a className="recuperar__senha" href="#">Recuperar senha</a>
                        <button className="botao"><Link to='/Sistema'>Entrar </Link></button>
                    </form>
                </div>
            </section>
            <p className="ou">ou</p>

            <section className="login__outros" data-aos="zoom-in">
                <button  className="outro_login outrologin--face"><p className="outro_login-texto">Entrar com o Facebook</p></button>
                <button className="outro_login outrologin--google"><p className="outro_login-texto">Entrar com o Google</p></button>
            </section>

            <button data-aos="zoom-in"><Link to='/cadastro'>Cadastrar-se </Link></button>
        </main>
     <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>AOS.init();</script>
   </div>

   
)}