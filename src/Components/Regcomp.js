import React, { Component } from "react";
class Regcomp extends Component {
  render() {
    console.log("Regular Component Render");
    return <div>This is the Regcomp{this.props.name}</div>;
  }
}

export default Regcomp;
