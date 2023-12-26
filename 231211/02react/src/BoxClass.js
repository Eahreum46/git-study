import React, { Component } from "react";

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log("bye");
  }
  render() {
    return <div>Box{this.props.num}</div>;
  }
}
