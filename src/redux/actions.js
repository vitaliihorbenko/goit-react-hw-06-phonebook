export const addContact = ({ name, number }) => ({
  type: "phoneBook/addContact",
  payload: { name, number },
});

export const deleteContact = (value) => ({
  type: "phoneBook/addContact",
  payload: value,
});

export const changeFilter = (value) => ({
  type: "phoneBook/changeFilter",
  payload: value,
});

export const getVisibleContacts = (contactsValue) => ({
  type: "phoneBook/getVisibleContacts",
  payload: contactsValue,
});

export const get = () => () => ({
  type: "phoneBook/getContact",
  payload: {
    name: "",
    number: "",
  },
});
