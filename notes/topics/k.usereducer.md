## useReducer


>- ***useReducer is a React Hook that is used for managing complex state logic in functional components. It is an alternative to useState hook when the state logic involves multiple sub-values or when the next state depends on the previous one. useReducer is similar to the reducer function in Redux.***
>- ***useReducer is particularly useful for managing state in complex components where state changes depend on multiple factors or where the state logic is more complex than simple incrementing or decrementing. It promotes a more centralized and predictable way of managing state compared to using multiple useState hooks.***

>- ***Reducer Function:*** The reducer function is responsible for specifying how the application's state changes in response to actions dispatched to it. It takes the current state and an action as arguments, and returns the new state.
>- ***Dispatching Actions:*** Actions are plain JavaScript objects that represent what happened. They contain a type property that describes the action and optionally carry additional data.


*** Example of using useReducer***
```javascript
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
        //use Reducer accepts two param reducer and intial state
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
```