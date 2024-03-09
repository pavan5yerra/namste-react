# points to remember

## Is JSX mandatory for React?
>- ***JSX is not mandatory for React***
>- ***JSX is just a syntactical sugar for React***
>- ***Is makes code much readable , but it needs babel to compile the code***
>- ***[React without JSX](https://reactjs.org/docs/react-without-jsx.html) - READ***

## Is ES6 mandatory for React?
>- ***Its not mandatory of ES6 for React***
>- ***But we need to use class components instead of functional components in react***
>- ***[React without ES6](https://legacy.reactjs.org/docs/react-without-es6.html)-READ***


## How can I write comments in JSX?

       const RestroCard = () => {
        return (
            <div className="res-card">
                {/* This is comment in JSX */}
                <image alt="biryani" src=""/>
                <h3> Meghana Foods</h3>
                <h3>cusines</h3>
                
            </div>
        )
    }

## What is <React.Fragment></React.Fragment> and <></> ?
> ***If you want to return just a elements without any container wrapping around it we can use Fragments***

    const RestroCard = () => {
        return (
           <>  {/* used fragment instead of div */}
                <image alt="biryani" src=""/>
                <h3> Meghana Foods</h3>
                <h3>cusines</h3>
                
            </>
        )
    }

> ***For suppose if you want to add id to children element while returning we need React.Fragement***

     const RestroCard = () => {
        const data= []
        return (
            data.map((x,index) => <React.Fragment key = {index}>  
                <image alt="biryani" src=""/>
                <h3> Meghana Foods</h3>
                <h3>cusines</h3>
                
        </React.Fragment>
        ))
    }

## What is Virtual DOM?

>- ***Virtual DOM is the virtual representation of Real DOM***
>- ***React update the state changes in Virtual DOM first and then it syncs with Real DOM***
>- ***Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.***
>- ***Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions***
>- ***It uses batch updating***


##  What is Reconciliation in React?
>- ***Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation***

## What is React Fiber? 
>- ***[ PLEASE READ](https://flexiple.com/react/react-fiber)***
    
## Why we need keys in React? When do we need keys in React?
>- ***We need keys to make element unique and it helps react to identify the element***
>- ***We need keys when we try to render multiple duplicate elements***

       const RestroCard = () => {
        const data= []
        return (
            data.map((x,index) => <React.Fragment key = {index}>  
                <image alt="biryani" src=""/>
                <h3> Meghana Foods</h3>
                <h3>cusines</h3>
                
        </React.Fragment>
        ))
    }
## Can we use index as keys in React?
>- ***Please prefer to use unique id's from coming for data instead of indexes***
>- ***If we use indexes ,in some usecases it will tamper while updating/deleting/adding the elements in list***

## What is props in React? 
>- ***props are like parameters to component***
>- ***props are keys medium to communicate between the components***

## References
>- Code Link: https://bitbucket.org/namastedev/namaste-react-live/src/master/
>- Virtual DOM: https://reactjs.org/docs/faq-internals.html
>- Reconciliation: https://reactjs.org/docs/reconciliation.html
>- React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
>- React Without ES6: https://reactjs.org/docs/react-without-es6.html
>- Index Keys as Anti-Pattern:https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/