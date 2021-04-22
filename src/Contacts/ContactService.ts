import axios from 'axios'
import {Contact} from "./Contact";

export const saveContact = async (
    contact: Contact
): Promise<void | undefined> => {
    try {
        await axios.post<void>(
            `/cms/api/contact/new`,
            contact
        )
    } catch (err) {
        return undefined
    }
}

export const getContacts = async (): Promise<Array<Contact>> =>
    (
        await axios.get<Array<Contact>>(
            `/cms/api/contacts`
        )
    ).data