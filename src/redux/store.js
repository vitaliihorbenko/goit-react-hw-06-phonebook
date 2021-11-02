import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "phoneBook/addContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          name: payload.name,
          number: payload.number,
        },
      };
    case "phoneBook/getVisibleContacts":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          name: payload.name,
          number: payload.number,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
