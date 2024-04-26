# State updates in react

## [State as a snapshot](https://react.dev/learn/state-as-a-snapshot)

>- ***setting state triggers new renders***
>- ***A state variable’s value never changes within a render, even if its event handler’s code is asynchronous***
>- ***React stores state outside of your component, as if on a shelf.***
>- ***When you call useState, React gives you a snapshot of the state for that render.***
>- ***Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.***
>- ***Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.***

                export default function Counter() {
                const [number, setNumber] = useState(0);

                    return (
                        <>
                        <h1>{number}</h1>
                        <button onClick={() => {
                            setNumber(number + 1);
                            setNumber(number + 1);
                            setNumber(number + 1);
                            setTimeout(() => {
                                alert(number);  // even after three seconds the value of number in the alert will be same
                                }, 3000);
                        }}>+3</button>
                        </>
                    )
                }

        output is 1 because  , number value will only update on the rendering completes


## [Queueing a series of state updates](https://react.dev/learn/queueing-a-series-of-state-updates)

***What “batching” is and how React uses it to process multiple state updates***
>-  ***When use multiple state update react wont rerender the componeent multiple times, it will make an batch update***
>-  ***React waits until all code in the event handlers has run before processing your state updates.***


***A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it***

***Updating the same state multiple times before the next render***
>- ***You can call setNumber(n => n + 1) like this***
>- ***To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.***

        import { useState } from 'react';

        export default function Counter() {
        const [number, setNumber] = useState(0);

        return (
            <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
            </>
        )
        }   

        output will be  3.

***What happens if you replace state after updating it***
    
        <button onClick={() => {
            setNumber(number + 5);
            setNumber(n => n + 1);
            setNumber(42);
        }}/>
    
        //output is 42

# [Updating Objects in state](https://react.dev/learn/updating-objects-in-state)

>- ***State can hold any kind of JavaScript value, including objects.***
>- ***But you shouldn’t change objects that you hold in the React state directly.***
>- ***Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.***


***What is mutation***
>- ***change the contents of the object itself is called mutation***

    
        const [position, setPosition] = useState({ x: 0, y: 0 });
        position.x=5   // This is called muatation
    

***Treat state as read-only***
>- ***you should treat any JavaScript object that you put into state as read-only***

    
        const [position, setPosition] = useState({ x: 0, y: 0 });
        position.x=5   // This is called muatation and we shouldn't do it.

        const newPosition = {} //This is Absolutley fine beacuse we are creating a new copy of object and replacing it.
        nextPosition.x = 5;  
        nextPosition.y = 6;
        setPosition(nextPosition); 
    


## Copying objects with the spread syntax

        
            const [person, setPerson] = useState({
                    firstName: 'Barbara',
                    lastName: 'Hepworth',
                    email: 'bhepworth@sculpture.com'
                });

            <!-- changing fisrtName to Pavan -->
            setPerson({
                ...person, // Copy the old fields
                firstName: "pavan" // But override this one
             });
        

## Updating nested Objects 

            const [person, setPerson] = useState({
                name: 'Niki de Saint Phalle',
                artwork: {
                    title: 'Blue Nana',
                    city: 'Hamburg',
                    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
                }
                });


            //updating city to newDelhi

            setPerson({
                ...person, // Copy other fields
                artwork: { // but replace the artwork
                    ...person.artwork, // with the same one
                    city: 'New Delhi' // but in New Delhi!
                }
                });
        
# Updating Arrays in state

>- ***Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects***

## Updating arrays without mutation
>- ***Please avoid below methods becuase they mutate the existing array  - (push, unshift ,pop ,shift ,splice ,reverse ,sort)***
>- ***Please Use below methods because they return new array - (concat,[...arr] ,filter , slice , map )***

## Adding to array 

***Adding item to array at the start***

        const [artists, setArtists] = useState([]);
        setArtists([
            { id: nextId++, name: name },
            ...artists // Put old items at the end
        ]);
            
***Adding item to array at the end***

         setArtists([
            ...artists, // Put old items at the start
             { id: nextId++, name: name }
        ]);

## Removing from an array

        let initialArtists = [
            { id: 0, name: 'Marta Colvin Andrade' },
            { id: 1, name: 'Lamidi Olonade Fakeye'},
            { id: 2, name: 'Louise Nevelson'},
        ];

        setArtists(artists.filter(a => a.id !=0)); // removes items with id 0


## Transforming an array

        const [data,setData] = useState([1,2,3,4]);
        setData(data.map(item) => item*2);


## Reversing an Array

        const initialList = [
            { id: 0, title: 'Big Bellies' },
            { id: 1, title: 'Lunar Landscape' },
            { id: 2, title: 'Terracotta Army' },
        ];

        const [list, setList] = useState(initialList);

        const nextList = [...list]; // first make copy of it
        nextList.reverse(); // reverse the array 
        setList(nextList); // then update the state



# [Updating objects inside arrays](https://react.dev/learn/updating-arrays-in-state)

>- ***When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level***


        const initialProducts = [{
            id: 0,
            name: 'Baklava',
            count: 1,
            }, {
            id: 1,
            name: 'Cheese',
            count: 5,
            }, {
            id: 2,
            name: 'Spaghetti',
            count: 2,
        }];

        const [products,setProducts] = useState(initialProducts)
        setProducts(products.map(product => {
            if(product.id===1) return {...product , count: product.count+1}  //updating count  with id value 1
            else return product;
        }))
