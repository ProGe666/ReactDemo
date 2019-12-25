/*
functional component stateless.{before 16.8}
stateless component also called dumb component/ presentational component


*/
import React from "react";

export const Name = (props) =>{
  //props is readonly
  //props.name = 'Charlie';
    //JSX
  return <li>{props.name} age is {props.children}</li>;
};


