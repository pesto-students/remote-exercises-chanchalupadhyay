import React from "react";

class Item extends React.Component {
  state = { isSelected: false };

  handleClick = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          <li
            onClick={this.handleClick}
            style={{
              color: this.state.isSelected ? "red" : "black",
            }}
          >
            {this.props.product.name}---{this.props.numberOfItems}
          </li>
        </ul>
      </div>
    );
  }
}
export default Item;
