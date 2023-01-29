import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CounterUsingReduxThunk from "../components/CounterUsingReduxThunk/CounterUsingReduxThunk";
import CounterUsingUseReducer from "../components/CounterUsingUseReducer/CounterUsingUseReducer";
import NotFound from "../components/NotFound/NotFound";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <App></App>
            },
            {
                path: '/use-reducer',
                element: <CounterUsingUseReducer></CounterUsingUseReducer>
            },
            {
                path: '/redux-thunk',
                element: <CounterUsingReduxThunk></CounterUsingReduxThunk>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;