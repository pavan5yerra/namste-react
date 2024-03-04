# Redux

>- ***useReducer***
>- ***Redux***
>   - ***useDispatch***
>   - ***useSelector***



## useReducer
>- ***useReducer is a React Hook that lets you add a reducer to your component.***

        import { useReducer } from "react";

        const intialState = {
            id: 1,
            title: "Todo 1",
            complete: false,
        };

        const reducer = (state, action) => {
            switch (action.type) {
                case "ID":
                return {
                    ...state,
                    id: action.value,
                };
                default:
                return state;
            }
        };
        <!-- use Reducer accepts two param reducer and intial state -->
        export const UseReducer = () => {
            const [state, dispatch] = useReducer(reducer, intialState);
            return (
                <div>
                <h2> Use Reducer Practice </h2>
                <button
                    onClick={() => dispatch({ type: "ID", value: Number(state.id) + 1 })}
                >
                    Click me{" "}
                </button>
                <div>
                    displaying it using useReducer : {state.id} : {state.title}{" "}
                </div>
                </div>
            );
        };


## Redux & Thunk

>- ***Redux is third party library for react , which acts as reducer***
>- ***Redux contains three parts store , actions and reducer***
>- ***Its used for centralized state management***
>- ***Thunk is middleware which is used to deal with side effect while updating the state***


***reducer***

>- ***It where the state is stored and manipulated***
>- ***It contains intial state  and returns state at the end***

            
***reducer1.js***

            const initialState = { id: 0 };

            export const Reducer1 = (state = initialState, action) => {
            switch (action.type) {
                case "INC":
                 return { ...state, id: state.id + action.val };
                case "DEC":
                 return { ...state, id: state.id - action.val };
                default:
                return state;
              }
            };


***actions***

>- ***Actions is the place where the dispatched user actions will get captured***
>- ***This is place where user will set what type of action should we implement on state***


***actions.js***

        export const handleIncrement = (val) => {
            return {
                type: "INC",
                val: val
            };
        };

        export const handleDecrement = (val) => {
            return {
                type: "DEC",
                val: val
            };
        };
        export const handleIncrementWithThunk = (val) => {
            //we modified using thunk
            let data = val + 4;
            return (dispatch) => {
                dispatch(handleIncrement(data));
            };
        };


***Creating Store***

>- ***Generally this is parent or root component where we create a store***
>- ***Its acts like a context where this store can be accessible all the child components under it***
>- ***We need to use libraries for using redux react-redux & redux***
>- ***redux***
>   - ***Its a main library , manages state Applications***
>   - ***Its always has a single Store , which can handle multiple reducers***
>- ***react-redux***
>   - ***It Binds between react and redux***
>   - ***It offers set of react hooks , useSelector ,useDispatch , useStore***
>- ***redux-thunk***
>   - ***middleware that allows you to write action creators that return a function instead of an action***
>   - ***The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.***
>   - ***Used mainly for async calls to api, that dispatch another action on success / failure.***

***App.js***

        import { Provider } from "react-redux";
        import thunk from "redux-thunk";
        import { createStore, combineReducers, applyMiddleware } from "redux";
        import { Reducer1 } from "./store/reducer1";
        import { Child } from "./reduxChild";
        export const Redux = () => {
            const rootReducer = combineReducers({ rd1: Reducer1 });
            const store = createStore(rootReducer, applyMiddleware(thunk));
            return (
                <Provider store={store}>
                <div>
                    <h2> Redux Practice </h2>
                    <Child />
                </div>
                </Provider>
            );
        };



***usage of redux in child component***

***reduxChild.js***
        
        import { useDispatch, useSelector } from "react-redux";
        import {
        handleIncrement,
        handleDecrement,
        handleIncrementWithThunk,
        } from "./actions/red1actions";
        export const Child = () => {
            const dispatch = useDispatch();
            const count = useSelector((state) => state.rd1.id);
            return (
                <div>
                <p> Iam a child </p>
                <button onClick={() => dispatch(handleIncrement(1))}>Increment</button>
                <button onClick={() => dispatch(handleDecrement(1))}>Decrement</button>
                <button onClick={() => dispatch(handleIncrementWithThunk(1))}>
                    Thunk Increment
                </button>
                <div> count is : {count} </div>
                </div>
            );
        };

>- ***Please go through this sandbox  for [demo](https://codesandbox.io/p/sandbox/react-practice-i981uj)***