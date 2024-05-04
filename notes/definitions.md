***Closure***
>- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
>- A closure is a function having access to the parent scope, even after the parent function has closed. 


***Lexical scope***
>- In JavaScript, lexical scope is the concept of determining the scope of a variable based on its declaration. 
>- This means that the scope of a variable is determined by the block of code in which it is declared, not by the block of code in which it is used


***Promise***
>- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


***Redux***
>- Redux is a pattern and library for managing and updating application state, using events called "actions". 


***useRef***
>- The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
>- These values will sustain between  component renders.

***useMemo***
>- useMemo is a valuable tool in the React framework, designed to optimize performance by memoizing expensive computations. With useMemo , React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.

***useCallback***
>- The useCallback hook is a built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render.


***useEffect***
>- The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

***memo***
>- memo API. React. memo memoizes a functional component and its props. Doing so helps prevent unnecessary re-renderings that originate from the re-renderings of the component's parent / ancestors

***thunk***
>- Thunk is a logical concept in programming where you deal with a function that is primarily used to delay the calculation or evaluation of any operation. Redux Thunk acts as a middleware that will return you a function instead of an object while calling through the action creators.

***redux saga***
>- Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations.




***context API vs Redux***
>- The difference between Context API and Redux lies in how they handle state changes. 
>- Redux takes a centralized approach, where state changes are managed in a central store.
>- On the other hand, Context API deals with state changes on a components level, as they happen within each component.


***useReducer vs Redux***
>- In general, start with useReducer for simpler projects or when focusing on component-level state. 
>- As our application’s state management requirements become more intricate or if we’re dealing with global state sharing and complex interactions, consider incorporating Redux for its more comprehensive toolset. 


***useMemo vs useCallback***
>- useMemo is used to memoize values or computations, helping to optimize expensive calculations or data transformations. 
>- useMemo focuses solely on optimizing performance by avoiding unnecessary recalculations.
>- useCallback is used to memoize callback functions, reducing unnecessary re-creation of functions and optimizing component re-renders
>- useCallback returns a memoized callback function, while useMemo returns a memoized value
>- Both hooks can be used to optimize the performance of your React components by avoiding unnecessary re-creations of functions or values


