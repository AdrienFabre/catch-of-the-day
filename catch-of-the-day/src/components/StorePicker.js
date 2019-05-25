import React from "react";
import { format } from "url";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
      </form>
    );
  }
}

export default StorePicker;
