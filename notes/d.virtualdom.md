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

🧱 1. Stack Reconciler (React <16)
The Stack Reconciler was based on the JavaScript call stack.
It executed rendering work synchronously and recursively, without stopping.

❌ Characteristics
       Rendering is blocking
       Cannot pause between renders
       Cannot prioritize urgent updates
       Large component trees freeze the UI
       No concurrency support
       
🖼️ Diagram — Stack Reconciler Flow

       Start <App>
          ↓
       Render <Header>
          ↓
       Render <Content>
          ↓
       Render all 5000 items (BLOCKING)
          ↓
       Render <Footer>
          ↓
       UI frozen until finished
       
**Example of Blocking Render**
function BigList() {
  const items = Array.from({ length: 5000 });
  return items.map((_, i) => <div key={i}>{i}</div>);
}

In old React, this would freeze the UI until all 5000 items were processed.

**🌱 2. Fiber Reconciler (React 16+)**

React Fiber is a complete rewrite of the reconciler.
Fiber = the new scheduling algorithm + the Fiber node data structure.

✔** Characteristics**
       Rendering is interruptible
       Work is split into small chunks called fibers
       React can pause, resume, and abort work
       Supports priority levels
       Enables Concurrent Mode
       Keeps UI responsive during heavy renders
       
🖼️ Diagram — Fiber Reconciler Flow

       Start <App>
          ↓
       Render <Header>
          ↓
       Render <Content>
          ↓
       Render 10 items → Pause → Yield to browser
          ↓
       Resume → Render next 10 items
          ↓
       Pause → Handle user input/scrolling
          ↓
       Resume until complete
          ↓
       Render <Footer>
          ↓
       UI stays responsive
       
🧬 3. Fiber Node Structure
Every component becomes a Fiber node internally:

       FiberNode {
         type,              // function/class/host component
         pendingProps,
         memoizedState,
         child,             // first child fiber
         sibling,           // next fiber at the same level
         return,            // parent fiber
         updateQueue,
         effectTag,         // side-effects
         lanes              // priority
       }
       
🌳 4. Fiber Tree Diagram (with pointers)

                     [App Fiber]
                          |
          ---------------------------------
          |               |               |
    [Header]         [Content]         [Footer]
                          |
                -------------------
                |        |        |
             [Item1]  [Item2]  [Item3]
                 |
           [Child of Item1]
           

           
Pointer relationships:

child → first child
sibling → next node at same level
return → parent node

🏎️ 5. Fiber Work Loop Timeline
       Fiber breaks rendering into small pieces:
       🟦 = work
       ⬜ = pause
       
       Time →
       App      🟦🟦
       Header   🟦
       Content  🟦🟦⬜🟦⬜🟦⬜
       Item1    🟦⬜
       Item2    🟦⬜
       Item3    🟦⬜
       Footer   🟦
       Browser gets chances to run:
       click events
       scroll events
       animations
       input handlers
       
⏳ 6. Stack vs Fiber Timeline Comparison

**❌ Old Stack Reconciler**

       [=============== 300ms BLOCKING WORK ===============]
UI frozen.

**✔ Fiber Reconciler**

       [===15ms===] pause  
                    [===20ms===] pause  
                                  [===12ms===] pause  
                                                [===10ms===]
UI stays smooth.

## Why we need keys in React? When do we need keys in React?
>- ***We need keys to make element unique and it helps react to identify the element***
>- ***We need keys when we try to render multiple duplicate elements***
```javascript
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
```


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
