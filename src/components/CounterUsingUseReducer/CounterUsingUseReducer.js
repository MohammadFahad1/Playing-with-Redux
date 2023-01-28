import React, { useReducer } from 'react';
import './CounterUsingUseReducer.module.css';

const CounterUsingUseReducer = () => {

    const initialState = 0;

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + action.payload.count;
        } else if (action.type === "DECREMENT") {
            return state - action.payload.count;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter Using Use Reducer</h2>
            <hr />
            <h1>Count: {state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}>-</button>
        </div>
    );
};

export default CounterUsingUseReducer;