import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const UseStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const apiLink = 'http://zmdp.cloud/iseAlim/spotify.json';
  return <Store.Provider value={{ apiLink }}>{children}</Store.Provider>;
};
