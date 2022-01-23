import {Contact} from "./Contacts/Contact";

export const sortByLastName = (contacts: Array<Contact>): Array<Contact> => {
    return contacts.sort((a,b) => (a.lastName < b.lastName) ? -1 : 1)
}