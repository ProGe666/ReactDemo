 import React, {Component} from 'react';
 import {connect} from "react-redux";
// import {connect} from 'react-redux';
//
// export default function (ExistingComponent) {
//
//     class WrapperHOCComponent extends Component {
//
//         constructor(props) {
//             super(props);
//             this.state = {};
//         }
//
//         static getDerivedStateFromProps(props, state) {
//             if (props.loggedIn) {
//                 return state;
//             } else {
//                 props.history.push('/login'); // redirect user to login page.
//                 return state;
//             }
//         }
//
//         render() {
//             return (
//                 <ExistingComponent {...this.props} />
//             );
//         }
//     }
//
//     function mapStateToProps({loggedIn}) {
//         return {loggedIn};
//     }
//
//     return connect(mapStateToProps)(WrapperHOCComponent);
// }

 const authGuard =(OldComponent) =>{
   const HocComponent =(props) =>{
       //simulata getDerivedStateFromProps
       React.useEffect(()=>{
           props.user &&
           !props.user && props.history.push('/login');
       });
       return (
         <OldComponent {...props}/>
       );
   };
   const mapStateToProps =({user}) =>{
       return {user};
   };

   return connect(mapStateToProps)(HocComponent);
 };
 export default authGuard;
