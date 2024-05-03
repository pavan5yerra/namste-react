# Points to Remember

## 1. Creating  hello world program using HTML
    
        <html>
            <head>
            </head>
            <body>
                <div> Hello World in HTML </div>
            </body>
        </html>
    
## 2. creating Hello World in plain javascript

         <script>
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from Javascript";
            const root = document.getElementById("root");
            root.appendChild(heading);
         </script> 
        
      
## 3. Usage of CDN links

**Using crossorigin attribute enables us to acccess the content from different domain / thrid party servers**
    
        <head>
            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        </head>
    
## 4. creating Hello World in REACT

        <body>
            <div id='root'> </div> 
            <script>
                const heading = React.createElement("h1",{},"Hello World from React"); 
                const root = ReactDOM.createRoot(document.getElementById("root")); 
                root.render(heading);
            </script>  
         </body>


### Code Explanation:
- usage of React.createElement("tagName",{},child/[children])
    - This function Three params 
        - tagName  
        - Attributes Object -> {id:"idName"}
        - child / Array of Children
- what does React.createElement returns
    - It return React Object
- usage of React.createRoot(document.getElementById("idName"));
    - createRoot function takes html Object
- usage of React.render("react object")
    - Render method takes React Object and replace it with the respective dom Object which matches the id
- React is loosly coupled , it can executed on heading or body , footer  or we can scale it up to large project.

#  Code Example 

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Namstey React</title>
        <link rel="stylesheet" href="./index.css"/>
        
    </head>

    <body>
        <div> Hello I am outside React executions</div> <!-- becuase id which pointed in createRoot function is "root" -->
        <div id="root">
            <h1>Hello World </h1> <!--  this element will be  replaced by render method -->
        </div>
     
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

        <script src="./App.js"> </script>
    </body>

    </html>



***What is Emmet?***
- Emmet is the Special feature in feature in VSCODE for auto generating small code snippets.

***Difference between a Library and Framework?***
- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. 
- When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
- Example : React js is libarary , Vue.js is framework

***What is CDN? Why do we use it?***
- CDN is a content Delivery network . 
- It is mainly used to store static content and iamges or media .
- It is used located at multiple geo graphic location to provide fast access to user

***Why is React known as React?***
- It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage

***What is crossorigin in script tag?***
- It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information.

***What is difference between React and ReactDOM ?***

***React***
>- ***Creating Reusable UI peices called  components***
>- ***React operate on virtual representation of DOM called VDOM***
>- ***React can determine most efficient way to update Broswers'DOM when data changes***

***React DOM***
>- ***Its a bridge between VDOM and browser DOM***
>- ***It renders react components in to Actual DOM***
>- ***ReactDOM is provides render method which is specific to web apps***
>- ***By decoupling the core definitions of components from the platform-specific rendering logic***
>- ***ReactDOM (web-specific app) , React Native (for mobile apps) or ReactVR (for virtual reality)***

***What is difference between react.development.js and react.production.js files via CDN?***
- In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

***What is async and defer? - see my Youtube video***
