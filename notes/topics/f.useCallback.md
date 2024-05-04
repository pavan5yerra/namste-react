## useCallback


***useCallback is a React Hook that is used to memoize functions, similar to how useMemo memoizes values. It's particularly useful when passing callbacks to child components that rely on reference equality to determine whether they should re-render.***

>- ***useCallback is a React Hook that lets you cache a function definition between re-renders.***
>- ***It takes two params , function and dependency array***
>- ***It returns a function which can be used***

***syntax***
```javascript
            const cachedFn = useCallback(fn, dependencies)
```
***code***
```javascript
        import {useCallback} from 'react';

        <!-- handlecallback will only execute if count value changes -->
        const handleCallback = useCallback(() => setSum(count + 5), [count]);

```