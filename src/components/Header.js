import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <header style={{background: "lightgrey"}}>
                    <h2>This is header</h2>
                    <nav style={{background: "grey"}}>
                        <a href="#" style={{display: "inline-block"}}>Logo</a>
                        <ul style={{display: "inline-block"}}>
                            {/*<li><Link to="/sign-in">Log In</Link></li>
                            <li><Link to="/sign-up">Sign Up></Link></li>*/}
                            <li><NavLink activeStyle={{color: 'red'}} to="/sign-in">Log In</NavLink></li>
                            <li><NavLink activeStyle={{color: 'red'}} to="/sign-up">Sign Up></NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;