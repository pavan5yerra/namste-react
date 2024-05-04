## Custom Hooks

***What is custom hooks***
>- ***Function***: A Custom Hook is a JavaScript function that starts with the prefix use (e.g., useCustomHook).
>- ***Logic Reusability***: Custom Hooks allow you to extract stateful logic from a component so that it can be reused across multiple components. 
>- They encapsulate logic, allowing you to compose complex behaviors in a modular and reusable way.
>- ***State Management***: Custom Hooks can encapsulate state management (using useState or useReducer), side effects (using useEffect), or any other React Hooks.
>- ***Example***: Suppose you have logic to fetch data from an API. You can create a custom hook (useDataFetching) that handles the fetching logic, and then reuse it across multiple components.

>- ***Custom Hooks let you share logic between components.***
>- ***Custom Hooks must be named starting with use followed by a capital letter.***
>- ***Custom Hooks only share stateful logic, not state itself.***
>- ***You can pass reactive values from one Hook to another, and they stay up-to-date.***
>- ***All Hooks re-run every time your component re-renders.***
> -***The code of your custom Hooks should be pure, like your component’s code.***
>- ***Wrap event handlers received by custom Hooks into Effect Events.***
>- ***Don’t create custom Hooks like useMount. Keep their purpose specific.***
>- ***It’s up to you how and where to choose the boundaries of your code.***

***Example for useDataFetch Hook***
```javascript
    import { useState, useEffect } from 'react';

    // Custom hook for fetching data from an API
    const useDataFetching = (url) => {
        const [data, setData] = useState(null);

        const fetchData = async (url) => {
             const response = await fetch(url);
             const result = await response.json();
             setData(result);
        }

        useEffect(() => {
                fetchData(url);
            }, [url]);

         return { data };
     };

    const MyComponent = () => {
        const { data } = useDataFetching('https://api.example.com/data');
        return (
            <div>
              {data && <pre>{JSON.stringify(data)}</pre>}
            </div>
        );
    };

```

***Example of custom hook for counter***
```javascript
        export const useCounter = () => {
            const [count, setCount] = useState(0);
            const counter = () => {
                setCount((count) => count + 1);
            };
            return [count, counter];
        };


        import { useCounter } from "./customHook";
        export const Comp1 = () => {
            const [count, counter] = useCounter();
            return (
                <div>
                <button onClick={counter}> Comp2 </button>
                <p>display : {count} </p>
                </div>
            );
        };
```