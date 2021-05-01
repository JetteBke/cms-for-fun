import axios from 'axios'
import {Contact} from "./Contact";

export const saveContact = async (contact: Contact): Promise<void> => {
    await axios.post(
        `/cms/api/contacts/new`,
        contact
    )
}

export const getContacts = async (): Promise<Array<Contact>> => {
    const response = await axios.get(`/cms/api/contacts`)
    return response.data
}