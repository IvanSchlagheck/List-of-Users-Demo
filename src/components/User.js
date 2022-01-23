import { Component } from "react";

import classes from "./User.module.css";

class User extends Component { //Inherits the functionality of the class Component that is already given and defined by React
  render() {
    return <li className={classes.user}>{this.props.name}</li>; // props comes with component but to access it we need to use the keyword .this
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
