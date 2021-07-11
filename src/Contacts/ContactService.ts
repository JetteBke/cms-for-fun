import axios from 'axios'
import {Contact} from "./Contact";

export const saveContact = async (contact: Contact): Promise<boolean> => {
    try {
        const response = await axios.post(
            `/cms/api/contacts/new`,
            contact
        )
        return (response.status === 201)
    } catch (err) {
        return false
    }
}

export const updateContact = async (contact: Contact): Promise<boolean> => {
    try {
        const response = await axios.put(
            `/cms/api/contacts/edit`,
            contact
        )
        return (response.status === 200)
    } catch (err) {
        return false
    }
}

export const getContacts = async (): Promise<Array<Contact>> => {
    const response = await axios.get(`/cms/api/contacts`)
    return response.data
}

export const getContact = async (contactId: number): Promise<Contact> => {
    const response = await axios.get(`/cms/api/contacts/${contactId}`)
    return response.data
}

export const deleteContact = async (contactId: number): Promise<boolean> => {
    try {
        const response = await axios.delete(`/cms/api/contacts/${contactId}/delete`)
        return (response.status === 200)
    } catch (err) {
        return false
    }
}