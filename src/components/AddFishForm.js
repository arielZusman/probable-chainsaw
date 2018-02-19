import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    };

    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form
        ref={input => (this.fishForm = input)}
        className="fish-edit"
        onSubmit={(this.createFish = this.createFish.bind(this))}
      >
        <input
          ref={input => (this.name = input)}
          placeholder="Fish Name"
          type="text"
        />
        <input
          ref={input => (this.price = input)}
          placeholder="Fish Price"
          type="text"
        />
        <select ref={input => (this.status = input)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={input => (this.desc = input)} placeholder="Fish Desc" />
        <input
          ref={input => (this.image = input)}
          placeholder="Fish Image"
          type="text"
        />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddFishForm;
