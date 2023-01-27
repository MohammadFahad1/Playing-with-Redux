import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

const Counter = ({ children }) => {
    const [count, setCount] = useState(0)

    const counterInfo = { count, setCount };
    return (
        <CounterContext.Provider value={counterInfo}>
            {children}
        </CounterContext.Provider>
    );
};

export default Counter;