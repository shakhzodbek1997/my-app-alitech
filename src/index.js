import React from "react";
import ReactDOM from 'react-dom';
import Sidebar from "./containers/Sidebar";
import SignUp from "./containers/SignUp";

ReactDOM.render(
    <div>
        <Sidebar
            title="Class Component"
            data={{name: 'Bobik', age: 12}}
        />
        <SignUp/>
    </div>
    , document.getElementById('root'));