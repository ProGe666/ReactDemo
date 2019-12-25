import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import App from './containers/App'
import {BrowserRouter} from "react-router-dom";
import {Switch,Route} from"react-router-dom"
import Product from "./containers/Product";
import Names from "./components/Names";
import AddName from "./containers/AddName";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/root.reducer";
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise'
import AddProduct from "./containers/AddProduct";
import EditProduct from "./components/EditProduct";
import Login from "./containers/login";
import authGuard from "./components/authGuard.hoc";

// const h4 =document.createElement('h4');
// const text = document.createTextNode('Hello World');
// h4.appendChild(text);
//
// document.querySelector('#root').appendChild(h4);

// react
//const reacth4 =React.createElement('h4',{style:{color:'red'}},'Hello React!');

//ReactDOM.render(reacth4,document.querySelector('#root').appendChild(h4));

//JSX
// const name = 'bob';
// //const myStyle ={color:'yellow'};
// const h2ReactElem = <h2 style={{color: 'indigo'}}>Hi React{name}</h2>;
//     //{} pass in variable
// ReactDOM.render(h2ReactElem,document.querySelector('#root').appendChild(h4));
const names=['Alice','Bob','Dan'];
const products = [
//     { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
//     { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'},
//     { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'},
//     { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'},
//     { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'},
//     { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'},
//     { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'},
//     { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg'},
//     { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'}
];
const addName =(name) =>{
    names.push(name);
};


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/products' component={Product}/>
                    <Route path ='/names' component = {Names}/>
                    <Route path ='/login' component = {Login}/>
                    {/*<Route path ='/names' component ={() => <Names names={names}/>}/>*/}
                    <Route path ='/addName' component ={AddName}/>
                    <Route path ='/add-product' component = {authGuard(AddProduct)}/>
                    <Route path ='/edit-product/:id' component = {EditProduct}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
