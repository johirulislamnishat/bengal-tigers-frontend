import React, { createContext, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const [orders, setOrders] = useState([]);
    return (
        <AuthContext.Provider value={{ ...allContext, orders, setOrders }} >
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;