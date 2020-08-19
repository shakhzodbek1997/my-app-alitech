import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/sign-in" component={SignIn}/> {/*agar exact bo'lmasa boshi shunaqa bosin degani >> http://localhost:3000/sign-in/111*/}
            <Route exact path="/sign-up" component={SignUp}/> {/*aynan shunaqa bo'lsin degani*/}
            <Route component={ErrorPage}/> {/*<Route path="*" component={ErrorPage}/>*/}
        </Switch>
        <Footer/>
    </BrowserRouter>

    , document.getElementById('root'));