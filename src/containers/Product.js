import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProducts} from "../actions/product.action";
import {Link} from "react-router-dom";


class Product extends Component{
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
    style ={
        width:'100px',
        height:'80px'
    };
componentDidMount(){
    !this.props.products && this.props.getProducts();
}
    render(){
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {
                    //short circuit expression
                    this.props.products && this.props.products.map((product, index) => {
                        return (
                            //TODO: refactor to use id    tech debt
                    <tr key={index + product.name}>
                        <td>
                            <Link to={`/edit-product/${product.id}`}>{product.name}</Link>
                        </td>
                        <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                    <img style={this.style} src={product.image} alt={product.name}/>
                    </td>
                    </tr>
                    );
                })
                }
                </tbody>
            </table>
        );
    }
}
// object destructure=====>{products}
function mapStateTpProps({products}) {
    //syntax sugar of {products:products}
    return {products};
}

function  mapDispatchCreators(dispatch) {
    return bindActionCreators({getProducts},dispatch);
}
export default connect(mapStateTpProps,mapDispatchCreators)(Product);
