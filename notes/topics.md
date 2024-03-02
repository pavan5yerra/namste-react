# Topics

>- ***HOC***
>- ***React Memo***
>- ***useMemo***
>- ***useCallback***
>- ***useContext***
>- ***useRef***
>- ***customHook***
>- ***useReducer***
>- ***Redux***
>   - ***useDispatch***
>   - ***useSelector***


## HOC -> Higher Order Components

>- ***Higher order Components in React allows you to resue the component logic across multiple components***
>- ***Its a function takes a component as an argument and returns new components that wraps the original component***
>- ***Benefits***
>   - Reusability
>   - ***Separation of concerns*** : encapsulate certain functinality in seperate component
>   - ***Error handling***
>   - ***Logging***
>   - ***Performance Tracking***


***hoc.js***
        
        export const Hoc = (Component, data) => {
            return (props) => (
                <div>
                    <Component {...props} />
                    Adding something in HOC {data}    <!--Added some extra to original component -->
                </div>
            );
        };


***parent.js***

            import { Hoc } from "./hoc";
            const Parent = (props) => {
                    return <div> hello {props.data}</div>;
            };

            export default Hoc(Parent, "i am passing data to HOC");




## React memo

>- ***memo lets you skip re-rendering a component when its props are unchanged.***
>- ***syntax is React.memo(component,?customMethod for deepcheck)***
>- ***If we pass just a component  React.memo(component) . It will do shallow copy. Shallow copy does check the nested values***
>- ***If we pass custom method along with component***
>- ***custom method will get access to prev and current props , we can use this props for deep check***

***Please check the code sandbox  to see the demo***

## code Example



        <!-- optimised  child with plain react.memo  - it uses shallow copy -->
            import {memo} from 'react';
            const OptChild = memo(Child);
___
            
        <!-- optimised  child with  react.memo with adding custom method param - for deep shallow  -->
         
            const customMethod = (prev, curr) => {
                if (prev.deep.address.age !== curr.deep.address.age) {
                    console.log(prev.deep.address.age, curr.deep.address.age);
                    return false;
                } else {
                    console.log(prev.deep.address.age, curr.deep.address.age);
                    return true;
                }
            };

            const DeepOptChild = memo(Child, customMethod);

       

## useMemo 

>- ***useMemo is a React Hook that lets you cache the result of a calculation between re-renders.***
>- ***useMemo takes two params  callback function and dependency array***
>- ***It will call the function only when dependecy array changes***

***syntax***
        const cachedValue = useMemo(calculateValue, dependencies)


***code***

        const expensive = (data) => {
                console.log("expensive function  usage");
                return data * 1000;
            };

        const memoData = useMemo(() => expensive(data), [data]);


## useCallback

>- ***useCallback is a React Hook that lets you cache a function definition between re-renders.***
>- ***It takes two params , function and dependency array***
>- ***It returns a function which can be used***

***syntax***
            const cachedFn = useCallback(fn, dependencies)

***code***

        import {useCallback} from 'react';

        <!-- handlecallback will only execute if count value changes -->
        const handleCallback = useCallback(() => setSum(count + 5), [count]);



## useRef

>- ***The useRef Hook allows you to persist values between renders.***
>- ***It can be used to store a mutable value that does not cause a re-render when updated.***
>- ***It can be used to access a DOM element directly.***
>- ***You can store information between re-renders (unlike regular variables, which reset on every render)***.
>- ***Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).***
>- ***The information is local to each copy of your component (unlike the variables outside, which are shared).***


***code***

            export const UseRef = () => {
            
                const counter = useRef(0);
                const prevValue = useRef();
                const [data, setData] = useState("");
                const elementFocusReminder = useRef("");

                useEffect(() => {
                    counter.current = counter.current + 1;
                    prevValue.current = data;
                });
                const getInputValue = (event) => {
                    setData(event.target.value);
                };

                return (
                    <div className="App">
                    <h3> page render count : {counter.current}</h3>
                    <input ref={elementFocusReminder} type="text" onChange={getInputValue} />
                    <div>Previously entered : {prevValue.current}</div>
                    <div>
                        {" "}
                        ref capture done by dom : {elementFocusReminder.current.value}{" "}
                    </div>
                    </div>
                );
                };


## context 

>- ***useContext is a React Hook that lets you read and subscribe to context from your component.***
>- ***context will help to remove callback hell***
>- ***By using this no need of sending data to  deep childs via props***
>- ***It contains provider (will be used in parent components) and subscriber (will be used by child components)***

***usecontext.js***

            import { createContext, useState } from "react";
            import { Child1 } from "./child1";

            //First of all create context
            export const stateContext = createContext();

            //use int the parent component as below
            export const UseContext = () => {
                const [data, setData] = useState("");
                return (
                    <stateContext.Provider
                    value={{ data: data, setData: (val) => setData(val) }}
                    >
                    <div>
                        <h2> Use Context practice</h2>
                        <input type="text" onChange={(e) => setData(e.target.value)} />
                        <> </>
                        <Child1 />
                    </div>
                    </stateContext.Provider>
                );
            };

***Child1.js***

        import { stateContext } from "./useContext";
        import { useContext } from "react";
        export const Child1 = () => {
        const content = useContext(stateContext);
        return (
            <div>
            Iam a child Component
            <p> i got data from parent with out using props : {content.data} </p>
            <p onClick={() => content.setData("hello")}>
                {" "}
                click me to change the data
            </p>
            </div>
        );
        };

## custom hook

>- ***Custom Hooks let you share logic between components.***
>- ***Custom Hooks must be named starting with use followed by a capital letter.***
>- ***Custom Hooks only share stateful logic, not state itself.***
>- ***You can pass reactive values from one Hook to another, and they stay up-to-date.***
>- ***All Hooks re-run every time your component re-renders.***
> -***The code of your custom Hooks should be pure, like your component’s code.***
>- ***Wrap event handlers received by custom Hooks into Effect Events.***
>- ***Don’t create custom Hooks like useMount. Keep their purpose specific.***
>- ***It’s up to you how and where to choose the boundaries of your code.***