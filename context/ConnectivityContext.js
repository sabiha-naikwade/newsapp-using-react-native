import React, {createContext} from 'react';

const ConnectivityContext = createContext({
  isConnected: null,
});

export default ConnectivityContext;
