import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
// import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

const App = ({
  filter,
  contacts,
  onSubmit,
  onDeleteContact,
  onChange,
  onVisibleContacts,
}) => {
  return (
    <div className={styles.app}>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={onChange} />
      <ContactList
        onVisibleContacts={onVisibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

// addContact = ({ name, number }) => {
//   if (
//     this.state.contacts.findIndex((contacts) => contact.name === name) !== -1
//   ) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
//   const newContact = {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   };
//   this.setState(({ contacts }) => ({
//     contacts: [newContact, ...contacts],
//   }));
// };

// changeFilter = (e) => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

// componentDidMount() {
//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(actions.addContact()),
    onChange: (value) => dispatch(actions.changeFilter(value)),
    onDeleteContact: () => dispatch(actions.deleteContact(5)),
    onVisibleContacts: () => dispatch(actions.getVisibleContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
