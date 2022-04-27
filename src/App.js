import './estilo.css';
import { useState } from 'react'
import bem_vindo from './bem_vindo.png'




function App() {

  const[email, setEmail, password, setPassword] = useState("")

  return (
    <div className='container'>
        <div className='container-login'>
          <div className='wrap-login'>
            <form className='login-form'>
                <div className='titulo-form'>
                  <img className='bem-vindo' src={bem_vindo} />
                </div>
                <div className='campo-form'>
                    <input className={ email !== "" ? 'has-val input' :'input'} 
                    type="email" 
                    value={email} onChange={e => setEmail (e.target.value)}/>
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='campo-form'>
                    <input className={ email !== "" ? 'has-val input' :'input'} 
                    type="password"
                    value={password} onChange={e => setPassword (e.target.value)}/>
                    <span className='focus-input' data-placeholder='Senha'></span>
                    
                </div>

                <div className='container-login-form-btn'>
                   <button className='login-form-btn'>Entrar</button>
                </div>

                <div className='text-center'>
                    <span className='text1'>Não possui uma conta?</span>
                    <a className='text2' href='#'>Cadastre-se aqui!</a>
                </div>
              </form>
            </div>
        </div>
    </div>
  )

}

export default App;
