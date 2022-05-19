import React, { Component } from "react"; // 3.3
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h6> </h6>
        <span className={this.getBgClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    ); // 3.3, 3.4, 3.5, 3.6, 3.7
  }

  formatCount() {
    // 3.5
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBgClasses() {
    //3.7
    let classes = "badge m-2 bg"; // 3.7
    classes += this.props.counter.value === 0 ? "-warning" : "-primary";
    return classes;
  }
}

export default Counter;
