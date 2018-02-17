import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();

    // methods are not bound by default to component
    // we can also do this on the onSubmit event
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    event.preventDefault(); // stop form from submitting

    console.log(this.sotreInput.value);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.sotreInput = input;
          }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
