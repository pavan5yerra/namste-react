## useMemo 

 ***useMemo is a React Hook that is used for memoization. Memoization is an optimization technique used to speed up calculations by caching the results of expensive function calls and reusing them when the same inputs occur again***

>- ***Memoization*** : When a functional component re-renders, React re-executes the entire function body. If a value is computed using useMemo, React will only recompute it when the dependencies have changed. If the dependencies haven't changed since the last render, React will reuse the previously computed value, thus avoiding unnecessary recalculations.***

>- ***useMemo is primarily used to optimize the performance of functional components by memoizing the result of expensive computations that are often repeated during rendering. It ensures that the computation is only performed when necessary, avoiding unnecessary recalculations***

>- ***Performance Optimization***: useMemo can be useful for optimizing performance-critical parts of your application where expensive computations are involved. By memoizing the result of such computations, you can prevent them from being repeated unnecessarily on every render.

>- ***it  will reuse the previously computed value, thus avoiding unnecessary recalculations.***
>- ***useMemo is a React Hook that lets you cache the result of a calculation between re-renders.***
>- ***useMemo takes two params  callback function and dependency array***
>- ***It will call the function only when dependecy array changes***



***Example for UseMemo***
```javascript
    import React, { useMemo } from 'react';

    const MyComponent = ({ a, b }) => {
        // Compute the result only when 'a' or 'b' changes
        const result = useMemo(() => {
            console.log('Computing result...');
            return a * b;
        }, [a, b]);

        return <div>Result: {result}</div>;
    };


```