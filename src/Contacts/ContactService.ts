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

export const showMessageEndpoint = async (): Promise<void | undefined> => {
    try {
        await axios.get<void>(
            `/hello`
        )
    } catch (err) {
        return undefined
    }
}