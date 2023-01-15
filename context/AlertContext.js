import React from 'react';

const AlertContext = React.createContext({
  error: null,
  addError: () => {},
  removeError: () => {},
});

export default AlertContext;
