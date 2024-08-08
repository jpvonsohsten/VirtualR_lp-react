// usercontext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (nome, email, senha) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        nome,
        email,
        senha
      });
      // Assume que o nome do usuário registrado é retornado no corpo da resposta
      setUser({ Nome: nome });
      return true;
    } catch (error) {
      console.error('Erro ao registrar:', error);
      return false;
    }
  };

  const login = async (email, senha) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        senha
      });
      setUser(response.data);
      return true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
