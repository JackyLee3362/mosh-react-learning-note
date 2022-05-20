import React, { Component } from "react";
import PropTypes from "prop-types";
const ListGroup = (props) => {
  // {props.genre.map((genre) => (
  //   <li class="list-group-item">{genre.name}</li>
  // ))}

  const { onItemSelect, items, textProperty, valueProperty, selectedItem } =
    props;
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <button className="btn">{item.name}</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ListGroup.defaultProps = {
  // 5.11
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
