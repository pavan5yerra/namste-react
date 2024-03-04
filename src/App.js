import React from "react";
import  ReactDOM from "react-dom/client";

import {ContactUs} from "./components/contantus"

const AppLayout = () => {
    return (
        <div className="app"> 
            <ContactUs/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);