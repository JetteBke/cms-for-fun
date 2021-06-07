import {saveContact} from "../Contacts/ContactService";
import axios from "axios";
import {saveNote} from "./NoteService";

jest.mock('axios')

describe('note service test', () => {
    it("should successfully create a note for a contact id", async () => {
//     given
        axios.post.mockImplementation(() => Promise.resolve({status: 201}))
        const contactId = '1234'
        const note = {
            createdAt: 3456789,
            updatedAt: 3456789,
            text: "This is a note",
        }
//     when
        const result = await saveNote(note, contactId)
//     then
        expect(axios.post).toHaveBeenCalledWith(`/cms/api/contact/${contactId}/notes/new`, note)
        expect(result).toBe(true)
    })
})