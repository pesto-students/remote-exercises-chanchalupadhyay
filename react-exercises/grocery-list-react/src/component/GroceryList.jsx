import React from "react";
import GroceryItems from "./GroceryItems";
import Item from "./Item";
import GroceryItem from "./GroceryItem.css";

class GroceryList extends React.Component {
  state = {
    items: GroceryItems,
    clicked: false,
    newItem: "",
    numberOfItems1: 0,
  };

  handlerClick = () => {
    let newItem = this.state.newItem;
    let oldItems = this.state.items;
    let id = oldItems.length + 1;
    let frequencyItem;

    oldItems
      .filter((x) => x.name === newItem)
      .forEach((exitingItem) => {
        exitingItem.numberOfItems = exitingItem.numberOfItems + 1;
        frequencyItem = exitingItem.numberOfItems;
        // console.log(exitingItem);
      });

    frequencyItem = frequencyItem ? frequencyItem : 1;
    let obj = {
      id: id,
      name: newItem,
      numberOfItems: frequencyItem,
    };

    if (frequencyItem > 1)
      this.setState({ items: [...this.state.items], newItem: "" });
    else {
      this.setState({ items: [...this.state.items, obj], newItem: "" });
    }
  };
  handlerChange = (e) => {
    let newItem = e.target.value;
    this.setState({ newItem: newItem });
    console.log(newItem);
  };
  render() {
    // console.log(`items==${JSON.stringify(this.state.items)}`);

    const GroceryItemsName = this.state.items.map((product) => (
      <Item
        product={product}
        name={product.name}
        numberOfItems={product.numberOfItems}
      />
    ));

    return (
      <div className="body">
        <div>
          <header className="header">
            <h1>Grocery Store</h1>
          </header>
          <div>{GroceryItemsName}</div>
          <label> Add new Items</label>
          <input
            type="text"
            name="new-item"
            value={this.state.newItem}
            onChange={(e) => this.handlerChange(e)}
          />

          <button onClick={this.handlerClick}>Add</button>
        </div>
      </div>
    );
  }
}
export default GroceryList;
