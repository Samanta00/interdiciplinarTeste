import React, {useState} from 'react'
import './css/estilo.css'
import logo from '../../componentes/logos/logo.png'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>



export default function CadastroErrado(){


   const [image,setImage]=useState('')


   const uploadImage=async e =>{

     e.preventDefault()
     console.log('funcionou')
   }
   return(    
      <div className='corpo'>



    <form onSubmit={uploadImage} method='POST' >

        
         <span className='input-menssage-error'>Este campo não está válido</span>

       <div className='paiEnvFoto'>
         
                 <div className='filhoEnvFoto'>
                      <div className='envFoto'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="150" alt='Selecione uma imagem' id='perfil' color='white' height="150" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                          </svg> 
                          

                      </div> 
                      <svg xmlns="http://www.w3.org/2000/svg" id='mais' width="26" height="66" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <input className='imageInput' type='file' name='image' accept='image/*' onChange={e => setImage(e.target.files[0])}></input>
                </div>
       </div>


          <div className='formulario'>





                 
                  <input className='inputForm' name='nome' required type='text' placeholder='Nome'></input>
                  <span className='input-menssage-error'>Este campo não está válido</span>

                 
                  <input className='inputForm' name='endereco' required type='text' placeholder='Endereço'></input>
                  <span className='input-menssage-error'>Este campo não está válido</span>


                  
                  <input className='inputForm' name='telefone' required type='tel' placeholder='Telefone'></input>
                  <span className='input-menssage-error'>Este campo não está válido</span>

              
                  <input className='inputForm' name='email' required type='email' placeholder='E-mail'></input>
                  <span className='input-menssage-error'>Este campo não está válido</span>

             
                  <input className='inputForm' name='senha' required minLength="8" type='password' placeholder='Senha'></input>
                  <span className='input-menssage-error'>Este campo não está válido</span>  

                           <button type='submit' className='submitButton'>Criar Conta</button>
          </div>



    </form>
   

      </div>


)}

