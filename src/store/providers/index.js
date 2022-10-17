import React from 'react';
import MainContextProvider from './MainContextProvider';

const StoreProvider = ({ children }) => {
    return <MainContextProvider>{children}</MainContextProvider>;
};

export default StoreProvider;