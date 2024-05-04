## context 

***In React, context provides a way to pass data through the component tree without having to pass props manually at every level. It is designed to share data that can be considered "global" for a tree of React components.***

>- ***Provider***: The Provider component is used to wrap the root component tree and provide the context value to all components within the tree.
>- ***Consumer***: The Consumer component is used to consume the context value within a component. It allows components to access the context value without having to pass props through intermediate components.
>- ***Context Object***: The context object itself is created using the React.createContext() function. It returns an object with Provider and Consumer components.


>- ***useContext is a React Hook that lets you read and subscribe to context from your component.***
>- ***context will help to remove callback hell***
>- ***By using this no need of sending data to  deep childs via props***
>- ***It contains provider (will be used in parent components) and subscriber (will be used by child components)***



***creating context using react functinal components***
***usecontext.js***
```javascript
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
```
***Child1.js***
```javascript
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
```
