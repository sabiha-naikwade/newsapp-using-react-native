import React, {createContext} from 'react';

const AppContext = createContext({});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
export default AppContext;
