## Refs


***In React, a ref is an object that represents a reference to a DOM element or a React component instance created in the render method. Refs provide a way to access and interact with DOM nodes or React components directly.***
***They are commonly used for managing focus, accessing form elements, triggering animations, integrating with third-party libraries, and more.***

***How useRef works***
>- ***Caching Values between Renders:*** The useRef Hook allows you to persist values between renders.
>- ***Storing Mutable Values:***It can be used to store a mutable value that does not cause a re-render when updated.
>- ***Accessing DOM Elements:***It can be used to access a DOM element directly.
>- ***You can store information between re-renders (unlike regular variables, which reset on every render)***.
>- ***Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).***
>- ***The information is local to each copy of your component (unlike the variables outside, which are shared).***
>- ***[Ref Link1 - Please READ](https://react.dev/learn/referencing-values-with-refs)***
>- ***[Ref Link2 - Please READ](https://react.dev/learn/manipulating-the-dom-with-refs)***

***code***
```javascript
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

```
***Example Code for managing focus using ref***
```javascript
        import React, { useRef, useEffect } from 'react';

        const FocusInput = () => {
            const inputRef = useRef(null);

            // Function to focus on the input element when the component mounts
            useEffect(() => {
                inputRef.current.focus();
            }, []);

            return (
                <div>
                {/* Input element with ref */}
                <input ref={inputRef} type="text" />
                <button onClick={() => inputRef.current.focus()}>Focus Input</button>
                </div>
            );
        };

        export default FocusInput;
```