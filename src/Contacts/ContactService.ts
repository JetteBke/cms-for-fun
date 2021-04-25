import axios from 'axios'
import {Contact} from "./Contact";

export const saveContact = async (
    contact: Contact
): Promise<undefined> => {
    try {
        await axios.post<void>(
            `/cms/api/contact/new`,
            contact
        )
    } catch (err) {
        return undefined
    }
}

export const getContacts = async (): Promise<Array<Contact>> => {
    const response = await axios.get(`/cms/api/contacts`)
    return response.data
}