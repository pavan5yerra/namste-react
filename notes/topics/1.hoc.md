## HOC -> Higher Order Components



***What is cross cutting concerns***

>- A Concern is a term that refers to a part of the system divided on the basis of the functionality.

>- There are two types of concerns:
>- ***core concerns***
    Primary functionality of the system is known as core concerns. For example: Business logic
>- ***crosscutting concerns***
>-  The crosscutting concern is a concern which is applicable throughout the application and it affects the entire application.
>-  ***For example*** : logging, security and data transfer are the concerns which are needed in almost every module of an application.


***What is HOC***
>- ***Higher order Components in React allows you to resue the component logic across multiple components***
>- ***Its a function takes a component as an argument and returns new components that wraps the original component***
>- ***Wrapper Component***: HOCs wrap one or more components, enhancing their behavior or appearance. They follow a pattern of wrapping a component with another component, usually adding props or additional behavior.
>- ***Props Manipulation***: HOCs allow you to manipulate props, add new props, or even conditionally render components based on certain conditions.
>- ***Example***: Suppose you have authentication logic that checks if a user is authenticated before rendering a component. You can create an withAuth HOC that handles the authentication logic and wraps the component. The wrapped component can then access authentication-related props (e.g., isAuthenticated) provided by the HOC.
>- ***Benefits***
>   - ***Reusability***
>   - ***Separation of concerns*** : encapsulate certain functinality in seperate component
>   - ***Error handling***
>   - ***Logging***
>   - ***Performance Tracking***




***Example of Handling Logging  were overriding onClick in HOC***
```javascript
    const withLoggingOnClick = (Component) => {
        return (props) => {
            const extraLogic = () => {
            console.log(" Extra logic button clicked");
            props.click();
            };
            console.log(props);
            //overding click logic
            return <Component {...props} click={extraLogic} />;
        };
    };

    //Button Component
    const Button = ({ data, click }) => {
         return <button onClick={click}>{data}</button>;
    };

    //Parent element
    export const Parent = (props) => {
        const handleClick = () => {
            console.log("Button is Clicked");
        };

        // using HOC element for overdiing exusting click
        const ButtonWithSomeLogic = withLoggingOnClick(Button);
        return (
            <div>
            <p> hello {props.data} </p>
            <ButtonWithSomeLogic click={handleClick} data="Logging button" />
            <Button click={handleClick} data="normal button" />
            </div>
        );
    };

```
***Example of Handling authentication in HOC***
```javascript
    import React, { useState, useEffect } from 'react';

    // >- Define the withAuth HOC
    const withAuth = (Component) => {
    return (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
        // >- Simulate authentication check (you can replace this with actual logic)
        const checkAuthentication = () => {
            //>- Your authentication logic here
            // >- For demonstration, let's assume the user is authenticated after 2 seconds
            setTimeout(() => {
            setIsAuthenticated(true);
            }, 2000);
        };

        checkAuthentication();
        }, []);

        // >- Pass isAuthenticated prop to the wrapped component
        // >- You can also pass other props if needed
        return <Component isAuthenticated={isAuthenticated} {...props} />;
    };
    };

    // Example component that will be wrapped by withAuth
    const MyComponent = ({ isAuthenticated }) => {
        return (
            <div>
            {isAuthenticated ? (
                <p>User is authenticated. Render authenticated content here.</p>
            ) : (
                <p>User is not authenticated. Redirect or show login form.</p>
            )}
            </div>
        );
    };

    // Wrap MyComponent with withAuth
    const AuthenticatedComponent = withAuth(MyComponent);

    // Now you can use AuthenticatedComponent in place of MyComponent


```
