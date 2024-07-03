## useCallback


***useCallback is a React Hook that is used to memoize functions, similar to how useMemo memoizes values. It's particularly useful when passing callbacks to child components that rely on reference equality to determine whether they should re-render.***

>- *** use callback is a React Hook that lets you cache a function definition between re-renders.***
>- ***It takes two params, function and dependency array***
>- ***It returns a function which can be used***
>- ***For every render new reference will be created for functions. use callback will be helpful to have the same reference in multiple renders, which helps memo to have reference equality***

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


```javascript

import React, { useState, useCallback } from 'react';

const ExpensiveComponent = React.memo(({ onClick }) => {
  console.log('ExpensiveComponent render');
  return <button onClick={onClick}>Click me</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Other State: {otherState}</h1>
      <ExpensiveComponent onClick={handleClick} />
      <button onClick={() => setOtherState(otherState + 1)}>Increment Other State</button>
    </div>
  );
};

export default App;
````
