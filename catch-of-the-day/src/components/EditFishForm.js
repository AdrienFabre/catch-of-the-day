import React from "react";
import AddFishForm from "./AddFishForm";

class EditFishForm extends React.Component {
  handleChange = event => {
    // update that fish

    // that a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
          placeholder="Name"
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
          placeholder="Price"
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          {" "}
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.desc}
          placeholder="Desc"
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
          placeholder="Image"
        />
      </div>
    );
  }
}

export default EditFishForm;
