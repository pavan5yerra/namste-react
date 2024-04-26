# points to remember 

##  Intro to JSX.
***Jsx is not an HTML . Its an react Element***

        const heading = React.createElement(h1,{id:"heading"},"Namstey React"); // using  react create Element
        const para = React.createElement("h1", {}, "Hello iam react elemnt"); 
        const h2 = React.createElement("div", {}, ["Hello iam react elemnt", para]); //using array of elements

        const heading = <h1 id="heading"> Namstey React</h1> // using JSX

***The Above two statements are same & heading variable is react element***

 >- JS Engine only understand ECMA script (current version- ES6)
 >- ***So to make JS Engine understand JSX we need a translator called [Babel](https://babeljs.io/) using PARCEL as environment***
 >- ***JSX --> Babel Transpiler --> React.creatElement --> React Element (JS Object) --> render converts JSObject to HTMLElement***
 >- ***Jsx can execute any piece of javascript code  inside curly brackets , Its  similiar to injecting script in HTML using script tag***

         const name = "pavan"
         const heading = <h1 id="heading"> Namstey React {name} {2*2}</h1>

- ***{} inside JSX  will santize youe code. It will stop from cross script attack***

## what is React Functional Component ?
***Functional component is  just a javascript Function***
    
        function Heading () {
            return (
                <h1>
                Namstey React in functional component
                </h1>
            )
        }
        
        const Heading = () => (
                <h1>
                    Namstey React in functional component
                </h1>
            )


## Code Example
        import React from "react";
        import  ReactDOM from "react-dom/client";


            const RestroCard = () => {
                    return (
                        <div className="res-card">
                            <image alt="biryani" src=""/>
                            <h3> Meghana Foods</h3>
                            <h3>cusines</h3>
                            
                        </div>
                    )
                }

            const AppLayout = () => {
            return (
                <div className="app"> 
                     <!---We can call the RestroCard in any of the way--->
                    <RestroCard/>
                    <RestroCard> </RestroCard>
                    {RestroCard()}
                </div>
            )
        }
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AppLayout/>);
