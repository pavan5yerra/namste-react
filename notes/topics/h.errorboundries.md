## Error boundaries

***Error boundaries in React are special components used to catch JavaScript errors that occur during the rendering of a component tree. They prevent the entire application from crashing by providing a fallback UI when errors are encountered. Error boundaries work by catching errors that occur in their child component tree during rendering, in lifecycle methods, or in constructors.***

***How Error Boundaries Work:***
>- ***Catching Errors:*** Error boundaries use JavaScript's try...catch statement internally to catch errors that occur during the rendering of their child components.
>- ***Updating State:*** When an error is caught, the error boundary updates its state to indicate that an error has occurred.
>- ***Fallback UI:*** If an error occurs within the error boundary's child component tree, the error boundary replaces the crashed subtree with a fallback UI, preventing the entire application from crashing.

***Lifecycle Methods of Error Boundaries:***
>- static getDerivedStateFromError(error): This static lifecycle method is invoked after an error has been thrown by a child component during rendering. It allows the error boundary to update its state in response to the error.
>- componentDidCatch(error, errorInfo): This lifecycle method is invoked after an error has been thrown by a child component during rendering. It provides the error boundary with information about the error and its component stack.



***Error boundary in class components***
```javascript
    import React, { Component } from 'react';

    class ErrorBoundary extends Component {
        state = { hasError: false };

        componentDidCatch(error, errorInfo) {
            console.error('Error caught by ErrorBoundary:', error, errorInfo);
            this.setState({ hasError: true });
        }

        render() {
            if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
            }
            return this.props.children;
        }
    }

    export default ErrorBoundary;
```
***In React, error handling after the introduction of React Hooks (starting from React version 16.8) remains largely the same conceptually, but hooks offer some new possibilities and patterns for handling errors in functional components.***

***Error Boundary with Class Components:***

```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```


***Error Boundary with Functional Components and React Hooks:***
```javascript
    import React, { useState, useEffect } from 'react';

    const useErrorBoundary = () => {
        const [hasError, setHasError] = useState(false);

        useEffect(() => {
            const errorHandler = (error) => {
                console.error('Error caught by ErrorBoundary:', error);
                setHasError(true);
            };

            window.addEventListener('error', errorHandler);

            return () => {
             window.removeEventListener('error', errorHandler);
            };
        }, []);

        return hasError;
    };

    export default useErrorBoundary;
```

 ***usage of Error boundary in functional component***
```javascript
    import React from 'react';
    import useErrorBoundary from './useErrorBoundary';

    const MyComponent = () => {
        const hasError = useErrorBoundary();

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        // Component logic
        };

    export default MyComponent;

```

***Handling Error with  in custom hooks while doing asyn operations***
```javascript
    import { useState, useEffect } from 'react';

    const useDataFetching = (url) => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            }
            };

            fetchData();
        }, [url]);

        return { data, error };
    };

    export default useDataFetching;
```
