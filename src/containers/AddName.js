/*
Class components can be  stateful
Normally we will use class components as stateful component
stateful components are also called container/smart conponents
* */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addName} from "../actions/name.action";
class AddName extends React.Component{
    state = {
        newName:''
    };
    setNewName (event){
        // this.state.newName = event.target.value; // don't mutate state directly. Use setStat()
        // this.render(); // doesn't work
        // forceUpdate will force react to render the view
        // this.forceUpdate();
        //setState will trigger the re-render of the component
        this.setState({
            newName :event.target.value
        });
    }
    onAddNameHandler =(event) =>{
        event.preventDefault();
      this.props.addName(this.state.newName)
        // pass this.state.newName to parent App component

    };
    render(){
        return(
            <form className ="form-group">
                <label htmlFor="name">name to add:</label>
                {/*Two way binding */}
                <input
                    className="form-control"
                    id ="name"
                    type="text"
                    value ={this.state.newName}
                    onChange={this.setNewName.bind(this)}
                />
         <button className= "btn btn-outline-info" type ="text" onClick={this.onAddNameHandler}> Add Name</button>
     </form>
    );
}

}
function mapDispatchToProps(dispatch){
    //addName =>addName() amd dispatch
    /*
    * bindActionCreators with dispatch
    * it will generate a new action creator which creates the action and dispatch it
    * New action creators will be pass to react component through */
    return bindActionCreators({addName}, dispatch);
}

export default connect(null,mapDispatchToProps)(AddName);
