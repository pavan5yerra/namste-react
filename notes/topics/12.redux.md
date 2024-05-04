## Redux
***Redux is a predictable state container for JavaScript applications, primarily used with libraries like React or Angular for managing application state. It provides a centralized store to manage the entire state of your application, making it easier to manage and update the state in a predictable way.***

***Key Concepts of Redux:***
>- Store: The store holds the entire state tree of your application. It is the single source of truth that represents the current state of your application.
>- Actions: Actions are plain JavaScript objects that describe what happened in your application. They are the only way to update the state in the Redux store.
>- Reducers: Reducers are pure functions that specify how the application's state changes in response to actions dispatched to the store. They take the current state and an action as arguments and return the new state.
>- Dispatch: Dispatch is a function provided by the store that allows you to dispatch actions to the reducer. It is the only way to trigger a state change in the Redux store.
>- Middleware: Middleware provides a way to extend Redux's functionality by intercepting actions before they reach the reducer. It is commonly used for logging, async actions, or other side effects.

***Redux Flow:***
>- ***Dispatch Action:*** You dispatch an action from your application, specifying what happened. An action is a plain JavaScript object with a type property that describes the action and optionally carries additional data.
>- ***Action is Handled by Reducer:*** The action is sent to the reducer function, which updates the state based on the action type. The reducer returns the new state, which replaces the old state in the store.
>- ***State Update:*** The store updates its state with the new state returned by the reducer. The updated state is then propagated to the connected components, triggering re-renders as necessary.


## Redux Middleware
***In the context of React and Redux, middleware is software that provides additional functionality to the Redux store's dispatch process. Middleware intercepts actions before they reach the reducers, allowing you to perform asynchronous tasks, side effects, or other logic that isn't directly related to updating the state.***



## Redux & Thunk

>- ***Redux is third party library for react , which acts as reducer***
>- ***Redux contains three parts store , actions and reducer***
>- ***Its used for centralized state management***
>- ***Please Read more about redux here https://sunscrapers.com/blog/flux-and-redux-differences/***
>- ***Thunk is middleware which is used to deal with side effect while updating the state***


***reducer***

>- ***It where the state is stored and manipulated***
>- ***It contains intial state  and returns state at the end***

            
***reducer1.js***
```javascript
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

```
***actions***

>- ***Actions is the place where the dispatched user actions will get captured***
>- ***This is place where user will set what type of action should we implement on state***


***actions.js***
```javascript
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

```
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
```javascript
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

```

***usage of redux in child component***

***reduxChild.js***
```javascript        
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
```
>- ***Please go through this sandbox  for [demo](https://codesandbox.io/p/sandbox/react-practice-i981uj)***
