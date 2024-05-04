
## React memo

>- ***memo lets you skip re-rendering a component when its props are unchanged.***
>- ***syntax is React.memo(component,?customMethod for deepcheck)***
>- ***If we pass just a component  React.memo(component) . It will do shallow copy. Shallow copy does check the nested values***
>- ***If we pass custom method along with component***
>- ***custom method will get access to prev and current props , we can use this props for deep check***
>- ***memo is a higher-order component (HOC) provided by React. It's used to memoize the result of a functional component, preventing unnecessary re-renders when props remain the same.***

***Please check the code sandbox  to see the demo***

## code Example
```javascript


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


```