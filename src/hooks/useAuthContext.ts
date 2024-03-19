import { logInContext } from '../App';
import { useContext } from 'react';
import { logInInterface } from '../App';

const useAuthContext = (): logInInterface => {
    const context = useContext(logInContext);
  
    if (context === null) {
      throw new Error('useAuthContext must be used within a MyContextProvider');
    }
  
    return context;
  };
  
  export { useAuthContext };