import { Component } from "react";
import { v4 as uuid } from "uuid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget.value);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const uniqueIdName = uuid();
    const uniqueIdNumber = uuid();
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label htmlFor={uniqueIdName}>Name</label>
        <input
          id={uniqueIdName}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleInputChange}
        />
        <label htmlFor={uniqueIdNumber}>Number</label>
        <input
          id={uniqueIdNumber}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleInputChange}
        />

        <button>add</button>
      </form>
    );
  }
}

export default Form;
