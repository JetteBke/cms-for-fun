import {deleteContact, getContact, getContacts, saveContact, updateContact} from "./ContactService";
import axios from "axios";
import {ContactFixture} from "./Contact";

jest.mock('axios')

describe('contact service test', () => {
    it("should get all contacts", async () => {
//     given
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data: ContactFixture}))
//     when
        const result = await getContacts()
//     then
        expect(result).toBe(ContactFixture)
    })

    it("should successfully create a contact", async () => {
//     given
        axios.post.mockImplementation(() => Promise.resolve({status: 201}))
        const contact = {
            address: "some street 12",
            city: "cologne",
            emailOne: "ghjk@ghjk.com",
            emailTwo: "tyuio@78ijnm.com",
            firstName: "Detlef",
            lastName: "Doodle",
            phoneOne: 3456789,
            phoneTwo: 3456789,
            postalCode: 8765,
            title: "Don",
            id: 1234
        }
//     when
        const result = await saveContact(contact)
//     then
        expect(axios.post).toHaveBeenCalledWith("/cms/api/contacts/new", contact)
        expect(result).toBe(true)
    })

    it("should successfully update a contact", async () => {
//     given
        axios.put.mockImplementation(() => Promise.resolve({status: 204}))
        const contact = {
            address: "some street 12",
            city: "cologne",
            emailOne: "ghjk@ghjk.com",
            emailTwo: "tyuio@78ijnm.com",
            firstName: "Detlef",
            lastName: "Doodle",
            phoneOne: 3456789,
            phoneTwo: 3456789,
            postalCode: 8765,
            title: "Don",
            id: 1235
        }
//     when
        const result = await updateContact(contact)
//     then
        expect(axios.put).toHaveBeenCalledWith("/cms/api/contacts/edit", contact)
        expect(result).toBe(true)
    })

    it("should get a contact by id", async () => {
//     given
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data: ContactFixture[0]}))
//     when
        const result = await getContact(1)
//     then
        expect(result).toBe(ContactFixture[0])
    })

    it("should delete a contact by id", async () => {
//     given
        axios.delete.mockImplementation(() => Promise.resolve({status: 200}))
//     when
        const result = await deleteContact(1)
//     then
        expect(result).toBe(true)
    })
})