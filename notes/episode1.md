# Points to Remember

1. Creating  hello world program using React
2. Usage of CDN links
3. usage of React.createElement("tagName",{},child/[children])
    This function Three params 
        -> tagName  
        -> Attributes Object --> {id:"idName"}
        -> child / Array of Children
4. what does React.createElement returns
    It return React Object
6. usage of React.createRoot(document.getElementById("idName"));
    createRoot function takes html Object
5. usage of React.render("react object")
    Render method takes React Object and replace it with the respective dom Object which matches the id
6. React is loosly coupled , it can excute on heading or body , footer  or we can scale it up to large project.

---> Code Example <----
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namstey React</title>
    <link rel="stylesheet" href="./index.css"/>
    
</head>

<body>
    <div> Hello I am outside React executions</div> ---> becuase id which pointed in createRoot function is "root" 
    <div id="root">
        <h1>Hello World </h1> ---> this will replaced by render method (point 5)
    </div>
    <!-- creating Hello World in plain javascript -->
    <!-- <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from Javascript";
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script> -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     <!-- creating Hello World in plain javascript -->
    <script>
        const heading = React.createElement("h1",{},"Hello World from React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script> 
    <script src="./App.js"> </script>
</body>

</html>

