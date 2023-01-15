import React, {createContext, useReducer} from 'react';

const initialState = {
  articles: [],
};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {articles: [...state.articles, ...action.payload]};
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider};
