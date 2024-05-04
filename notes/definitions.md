***Closure***
>- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
>- A closure is a function having access to the parent scope, even after the parent function has closed. 

***Practical use of closures***
>- Using private methods and variables
>- maintaining state between function calls
>- https://www.geeksforgeeks.org/what-is-the-practical-use-for-a-closure-in-javascript/



***Lexical scope***
>- In JavaScript, lexical scope is the concept of determining the scope of a variable based on its declaration. 
>- This means that the scope of a variable is determined by the block of code in which it is declared, not by the block of code in which it is used


***Promise***
>- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


***Redux***
>- Redux is a pattern and library for managing and updating application state, using events called "actions". 
>- Redux helps you manage "global" state - state that is needed across many parts of your application.
>- The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur

***useRef***
>- The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
>- These values will sustain between  component renders.
>- You can use useRef to store a value that persists across renders but doesn't trigger a re-render when updated. 
>- This can be useful when you need to keep track of previous values without triggering unnecessary renders

***useMemo***
>- useMemo is a valuable tool in the React framework, designed to optimize performance by memoizing expensive computations. With useMemo , React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.

***useCallback***
>- useCallback is a hook that can be used to memoize callback functions.
>- Memoization is a technique that can be used to cache the results of a function call so that it does not need to be re-evaluated on every render.
>- Memoization can be used to improve the performance of React components by preventing unnecessary re-renders.
>- useCallback is most commonly used to memoize callback functions that are passed to child components.
>- useCallback can also be used to memoize callback functions that are used in other contexts, such as ***event handlers*** and timers.

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


