import React from "react";
//import {name} from  "../components/Name" ;//default import since no{}
import Names from "../components/Names";
import AddName from "./AddName";
import Product from "./Product";
import Header from "../components/Header";
//class component
class App extends React.Component{
    // state ={
    //     names : ['Alice','Bob','Dan']
    // };
    // products = [
    //     { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
    //     { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'},
    //     { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'},
    //     { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'},
    //     { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'},
    //     { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'},
    //     { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'},
    //     { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg'},
    //     { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'}
    // ];

    // addName =(Name) =>{
    //     this.setState({
    //         names:[...this.state.names,Name]
    //
    //     });
    // }
    //must have render method in class component
    render(){
        return(
            //<React.Fragment> will create a wrapper here but won't show up in the DOM
            <>
            {/*<React.Fragment>*/}
            <Header />
            <main>
                {/*<Names names = {this.state.names}/>*/}
                {/*<AddName addName ={this.addName}/>*/}
                {/*<Product products = {this.products}/>*/}
                {this.props.children}
            </main>
            {/*</React.Fragment>*/}
            </>
        );
    }

}
export default App;
