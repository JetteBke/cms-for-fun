import axios from "axios";
import {getNotes, saveNote} from "./NoteService";
import {NoteFixture} from "./Note";

jest.mock('axios')

describe('note service test', () => {
    it("should successfully create a note for a contact", async () => {
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

    it("should get notes for a contact", async () => {
//     given
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data: NoteFixture}))
//     when
        const result = await getNotes('1')
//     then
        expect(result).toBe(NoteFixture)
    })
})