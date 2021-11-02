import React from "react";
import ContactsListItem from "../ContactsListItem";

const ContactList = ({ onVisibleContacts, onDeleteContact }) => {
  return (
    <div>
      <ul style={{ padding: "0px" }}>
        <ContactsListItem
          items={onVisibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    </div>
  );
};

export default ContactList;
