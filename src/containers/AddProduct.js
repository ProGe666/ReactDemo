import React from 'react';
import {addProduct} from "../actions/product.action";
import {connect} from "react-redux";
export const PRODUCTS_FIELDS = [
    {
        id: 'name',
        displayName: 'Name',
        inputType: 'text'
    },
    {
        id: 'brand',
        displayName: 'Brand',
        inputType: 'text'
    },
    {
        id: 'price',
        displayName: 'Price',
        inputType: 'number'
    },
    {
        id: 'stock',
        displayName: 'Stock',
        inputType: 'number'
    },
    {
        id: 'image',
        displayName: 'Image',
        inputType: 'text'
    }, //if you put a , here -> in es5 syntax error, in es6 this is allowed
];
class AddProduct extends React.Component {
    state = {
        product: {
            name: '',
            brand: '',
            price: '',
            stock: '',
            image: ''
        },
        formState:{
            name: {
                touched:false,
                dirty: false
            },
            brand: {
                touched:false,
                dirty: false
            },
            price: {
                touched:false,
                dirty: false
            },
            stock: {
                touched:false,
                dirty: false
            },
            image: {
                touched:false,
                dirty: false
            }
        },
        msg: ''
    };
    updateFormControl = (formStatus, event) => {
        //传参数，event往后推
        // SyntheticEvent用來解決compatibility issue
        // SyntheticEvent are the objects which act as a cross-browser wrapper
        // around the browser's native event. They combine the behavior of different
        // browsers into one API. This is done to make sure that the events show consistent
        // properties across different browsers.
        this.setState({
            product: {
                ...this.state.product,
                [event.target.id]: event.target.value   //use [] to turn it to string
            },
            formStatus:{
                ...this.state.formStatus,
                [event.target.id]:{
                    [formStatus]: true
                }
            }
        });//setState is used to update state
        // console.log(event);
    };
    submit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addProduct(
            this.state.product,
            () => {
                this.setState({
                    msg: 'Added successfully!'
                })
            },
            () => {
                this.setState({
                    msg: 'Added failed!'
                })
            }
        );
    };
    renderControl = (field) => (
        //when we loop thru sth in react we have to provide key, a unique key //dont use index as key
        // it's because that
        <div key={field.id}>
            <label htmlFor={field.id}>{field.displayName}</label>
            {/*two way binding set value to state*/}
            <input
                className="form-control"
                id={field.id}
                type={field.inputType}
                value={this.state.product[field.id]}
                onChange={this.updateFormControl.bind(null,'dirty')}
                onBlur={this.updateFormControl.bind(null,'touched')}
            />
            {
                this.state.formState[field.id].toucher &&
                !this.state.product[field.id] &&
                <p className="text-danger">{field.displayName} is required!</p>
            }

        </div>
    ); //the second () is used to return jsx so that you can get rid of the return statement + {}
    render() {
        return (
            <div className="container">
                <h2>Add Product</h2>
                <form className="form-group" onSubmit={this.submit}>
                    {
                        PRODUCTS_FIELDS.map(field => (this.renderControl(field)
                        ))
                    }
                    <button className="btn btn-success">Add Product</button>
                </form>
                <p className={ this.state.msg.includes('fail')?'text-danger':'text-success' }>{this.state.msg}</p>
            </div>
        );
    }
}
//{addProduct} is syntax sugar for mapDispatchToProps and bindActionCreators inside
export default connect(null, {addProduct})(AddProduct);
