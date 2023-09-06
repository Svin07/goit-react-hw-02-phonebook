import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContsctList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    this.setState({ contacts: { name: evt.target.value } });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputValue}
            onChange={this.handleChange}
          />

          <button type="submit" className="button">
            Add contact
          </button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            <ContactList name={this.state.name} />
          </ul>
        </div>
      </div>
    );
  }
}
