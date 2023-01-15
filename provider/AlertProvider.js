import React, {useState, useCallback} from 'react';
import {AlertContext} from '../context';
import {errorHandler} from '../utils/errorHandler';

const AlertProvider = ({children}) => {
  const [error, setError] = useState(null);
  const removeError = () => setError(null);
  const addError = status => setError(errorHandler(status));

  const contextValue = {
    error,
    addError: useCallback(status => addError(status), []),
    removeError: useCallback(() => removeError(), []),
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
