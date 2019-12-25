import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {PRODUCTS_FIELDS} from "../containers/AddProduct";
import {connect} from "react-redux";
import {getProducts} from "../actions/product.action";


let initialize =false;
class EditProduct extends Component{
    state;
    componentDidMount() {
        !this.props.products && this.props.getProducts();
    }
    componentWillUnmount() {
        initialize = false;
    }


    static  getDerivedStateFromProps(props,currentState){
        if(props.product){
            const id = props.match.param.id;
            const product = props.product.find(p => p.id ===id);
            initialize = true;
            props.initialize(product);
        }
        return currentState;
    }
    constructor(props){
        super(props);
        this.state = {};
        this.h4Ref = React.createRef();
    }
    renderField = (field,reduxFormField) =>{
        console.log(reduxFormField);
        //React.Fragment
        return(
            <React.Fragment>
            <label htmlFor={field.id}> {field.displayName} </label>
            <input
                className="form-control"
            type={field.inputType}
            id={field.id}
           //     onChange={reduxFormField.input.onChange} //=====>old way
                // new way
                {...reduxFormField.input}
            />
            <p></p>
        </React.Fragment>
        );
    };

    submit = (values) => {
        console.log(values);
        this.h4Ref.current.style.color ='red';
    };
    render() {
        return(
         <div>
             {/* ref get the reference*/}
             <h4 ref={this.h4Ref}>Edit Product {this.props.match.params.id}</h4>
             <form className="form-group" onSubmit={this.props.handleSubmit(this.submit)}>
                 {
                     PRODUCTS_FIELDS.map(field =>(
                         <Field  key={field.id} name = {field.id} component={this.renderField.bind(null,field)}/>
                         )
                     )
                 }
                 <button className="btn btn-dark">Edit Product</button>
             </form>
         </div>
    );
    }
}
function validate(val){
    const error = {};
    for( let key in val){
        !val[key] && (error[key] = `${key}cannot be empty`);
    }
    return error;
}
function mapStateToProps(appState) {
    console.log(appState);
    return {};
}
export default connect(mapStateToProps,{getProducts})(
    reduxForm({
        form:'EditProductForm',
        //use initialValues here to initialvalues
        validate
        // syntax suger(key value pair)
    })(EditProduct)
);
