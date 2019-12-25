import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    render() {
        return(
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="#" className="navbar-brand">React SPA</a>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            {/*<a className="nav-link">Products</a>*/}
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                           <Link className = "nav-link" to ="/names">Names</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addName">Add Name</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-product">Add Product</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login in</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;
