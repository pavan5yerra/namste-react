# Life Cycle Hook

>- ***React Hooks is not a migic , its just an arrays [READ](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)***
>- ***Please note useEffect will only called component render***

## useState

>- ***Normal javascript variable won't sustains it values during component rendering's, because as react component is nothing but functions***
>- ***What happens when the function removed from callstack and called again ?***
>   - ***Function will lose its whole execution context and lose its entire data***
>- ***useState is the special hook in react which is used to store variable and its sustains values for consequtive renederings***
>- ***useState returns array of two values one is vairable which the values is store and function which can manipulate the variable***


## useEffect

>- ***useEffect Hook is special hook which is used to achive asyn operation or side effects in the components***
>- ***useEffect can be used in multiple ways to achieve different behaviours***
>- ***useEffect takes two params , one is callback function & dependency array***


>- ***useEffect with empty dependency array***
>   - ***The code inside it will be called only at intial render of the component***
>   - ***Intial fetch calls during at intial page loadings***

>- ***useEffect with no dependency array***
>   - ***The code inside useffect will run for every subsequent renders***
>   - ***We will use it mostly to update the component state based on user interactions***
>   - ***Please note usage of setmethods/ improper update the variable will leads to infinte loops***


>- ***useEffect with  values inside  dependency array***
>   - ***The code inside useEffect only run when the variable inside dependency array change***


>- ***umount phase***
>   - ***Its return an function in useEffect***
>   - ***We can use / write some code in  the return function to clear the eventhandlers or heavy operation once its work is done***


        import { useEffect, useState } from "react";

        export const LifeCycles = () => {

        <!-- initialization phase react hooks uses useState insted of constructor -->
        const [data, setData] = useState("hello");

        <!-- useEffect usage -->
        <!-- shouldcomponentUsage in react.memo.js file -->
        <!-- componentDidMount() in hooks -->

        useEffect(() => {
            setData("rendered");
            console.log("componenetdidmount ran with [] dependency");
        }, []);

        <!-- Below log will appear first -->
        console.log("rendering outside "); 

        <!-- componenentDidUpdate in hooks -->

        useEffect(() => {
            console.log("componenetdidUpdate ran without dependency");
            <!-- we should never call setData inside useEffect with proper dependency array - it will lead to infinte array. -->
            <!-- setData("componenetdidUpdate ran without dependency"); -->
        });

        useEffect(() => {
            console.log("componenetdidUpdate ran", data);
        }, [data]);

        <!-- component will ummount  in hooks -->

        useEffect(() => {
            return () => {
            <!-- setData("component will unmount"); -->
            console.log("component will unmount");
            };
        });

        return <div>{data}</div>;
        };



## making fetch request using useEffect hook

        import {useState , useEffect} from 'react';

        <!-- intial loading of state which empty object -->
        const [data,setData]  = useState({}); 

        <!-- making fetch request to api -->
        const getData = async () => {
            const data = await fetch("https://sample.com")
            const resp = await data.json();
            setData(resp);
        }

         <!-- do your side effect or async operations here -->
        useEffect(() => {
            getData()
        },[])

        return (
            <div> 
                {data.map((item) => <li key={item.id}>{item.name} </li>)}
            </div>
        )
