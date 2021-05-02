import {saveContact, getContacts, updateContact, getContact} from "./ContactService";
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

    it("should create a contact", async () => {
//     given
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
        await saveContact(contact)
//     then
        expect(axios.post).toHaveBeenCalledWith("/cms/api/contacts/new", contact)
    })

    it("should update a contact", async () => {
//     given
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
        await updateContact(contact)
//     then
        expect(axios.put).toHaveBeenCalledWith("/cms/api/contacts/edit", contact)
    })

    it("should get a contact by id", async () => {
//     given
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data: ContactFixture[0]}))
//     when
        const result = await getContact(1)
//     then
        expect(result).toBe(ContactFixture[0])
    })
})