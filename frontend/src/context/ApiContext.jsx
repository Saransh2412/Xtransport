// src/context/ApiContext.jsx
import { createContext, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ pulled from .env

  return (
    <ApiContext.Provider value={{ API_BASE_URL }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
