import axios from 'axios'
import {Note} from "./Note";

export const saveNote = async (note: Note, contactId: string): Promise<any> => {
    try {
        const response = await axios.post(
            `/cms/api/contact/${contactId}/notes/new`,
            note
        )
        return (response.status === 201)
    } catch (err) {
        return false
    }
}

export const getNotes = async (contactId: string): Promise<Array<Note>> => {
    const response = await axios.get(`/cms/api/contact/${contactId}/notes`)
    return response.data
}