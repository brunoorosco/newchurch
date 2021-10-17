import React, { useState } from 'react';
import './App.css';
import api from './services/api'
import Input from './components/Form/Form'

function App() {
  //estado, informação  que vamos armazenar no estado do componente 
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
        
    try {
       const response = await api.post('admin', {email})
       console.log(response);
    
    } catch (error) {
        alert(`Falha no login, tente novamente`)
    }
  
  
  }

  return (
    <div className="container">
      <div className="content">
        <form action="post" onSubmit={handleSubmit}>
          <label htmlFor="email" className="">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)} />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
