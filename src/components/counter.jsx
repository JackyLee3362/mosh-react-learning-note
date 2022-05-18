import React, { Component } from "react"; // 3.3
class Counter extends Component {
  state = {
    count: 0, // 3.5
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBgClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    ); // 3.3, 3.4, 3.5, 3.6, 3.7
  }

  formatCount() {
    // 3.5
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
  getBgClasses() {
    //3.7
    let classes = "badge m-2 bg"; // 3.7
    classes += this.state.count === 0 ? "-warning" : "-primary";
    return classes;
  }
}

export default Counter;
