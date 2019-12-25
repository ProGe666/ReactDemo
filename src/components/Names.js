import React, {Component} from 'react';
import {Name} from "./Name"
import {connect} from "react-redux";
class Names extends Component{
   // names =['Alice','Bob','Dan']
   //  constructor(props){
   //      super(props);
   //  }

    render(){
        //first, we can only have one root
        //second if your multipe lines. use ( );
        return (
        <ul>
            {/*<Name name ="Alice"/>*/}
            {/*<Name name ="Bob"/>*/}
            {/*<Name name = "Jack"/>*/}
            {
                this.props.names.map(n => <Name key={n} name={n}>{Math.floor(20 *Math.random())} </Name>)
            }
        </ul>
        );
    }

}

//appState is the giant object from redux store. contains the data for your application
function mapStateToProps(appState){
    //object returned will be merged with props
    return{
      names: appState.names
    };
}

export default connect(mapStateToProps)(Names);
