import React, { PureComponent } from "react";

class Purecomp extends PureComponent {
  render() {
    console.log("Pure Component render");
    return <div>THIS IS THE PURE COMP{this.props.name}</div>;
  }
}

export default Purecomp;
