import React from "react";
import '../css/sistema.css'
import '../css/cartao-cachorros.css'
import '../css/reset.css'
import cachorro from '../images/cachorro-exemplo.webp'


export default function Sistema(){
    return(
        <div className="body">
             <header class="cabeçalho">
                <section>
                 <div className="container">
                 
                    <input type="checkbox" id="menu" className="container__botao"/>
                    <label for="menu">
                        <span className="cabeçalho__menu-hamburguer container__imagem"></span>
                    </label>

                    <ul className="lista-menu">
                        <li className="lista-menu__item">
                            <a href="#" className="lista-menu__link">Seja Voluntário</a>
                        </li>
                        <li className="lista-menu__item">
                            <a href="#" className="lista-menu__link">Adote um pet</a>
                        </li>
                        <li className="lista-menu__item">
                            <a href="#" className="lista-menu__link">agenda de Eventos</a>
                        </li>
                        <li className="lista-menu__item">
                            <a href="#" className="lista-menu__link">Favoritos</a>
                        </li>
                        <li className="lista-menu__item">
                            <a href="#" className="lista-menu__link">Doações</a>
                        </li>
                    </ul>
                    </div>
                    </section>
                        <div className="">ICON</div>
                        <div className="">Exemplo</div>
             </header>


        <section>
        <article className="cartao">
        <div className="cartao__imagem--div">
                <img className="cartao__imagem--imagem" src={cachorro} alt=""/>
                <ul>
                    <li className="cartao__informacoes">7 meses</li>
                    <li className="cartao__informacoes">7 kg</li>
                    <li className="cartao__informacoes">Macho</li>
                </ul>
            
        </div>
        </article>

        <article className="cartao">
            <div className="cartao__imagem--div">
                <img className="cartao__imagem--imagem" src={cachorro} alt=""/>
                <ul>
                    <li className="cartao__informacoes">7 meses</li>
                    <li className="cartao__informacoes">7 kg</li>
                    <li className="cartao__informacoes">Macho</li>
                </ul>
            </div>
        </article>
        
    </section>



        </div>

  
    )
}