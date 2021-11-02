import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

const ContactsListItem = ({ items, onDeleteContact }) => {
  return (
    <div>
      {items.map((contact) => {
        return (
          <li key={uuidv4()} className={styles.contactName}>
            {`${contact.name}: ${contact.number}`}
            <button
              className={styles.deleteBtn}
              type="button"
              name="delete"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

ContactsListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
