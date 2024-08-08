import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '../context/UserContext';

const LoginForm = ({ closeForm }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);
  const { login } = useUser();

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeForm();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, senha);
    if (success) {
      setMessage('Login bem-sucedido!');
      setTimeout(() => {
        closeForm();
      }, 1000);
    } else {
      setMessage('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade-in">
      <div ref={formRef} className="bg-black rounded-lg shadow-lg p-8 max-w-sm w-full animate-slide-in">
        <h2 className="text-2xl font-semibold mb-4">Entrar</h2>
        {message && <div className={`mb-4 ${message.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}>{message}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-md">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
