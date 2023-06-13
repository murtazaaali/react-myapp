import React, { Component } from "react";
import Purecomp from "./Purecomp";
import Regcomp from "./Regcomp";
class Parentcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ali Murtaza",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ali Murtaza",
      });
    }, 3000);
  }
  render() {
    console.log("Parent Component Render");
    return (
      <div>
        I'm the Parent Comp
        <Regcomp name={this.state.name} />
        <Purecomp name={this.state.name} />
      </div>
    );
  }
}

export default Parentcomp;
