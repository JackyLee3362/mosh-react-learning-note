import React, { Component } from "react"; // 3.3
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBgClasses()}>{this.formatCount()} </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-primary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-primary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disable" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
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
