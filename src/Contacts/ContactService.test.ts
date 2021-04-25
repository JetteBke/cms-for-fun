import {saveContact, getContacts} from "./ContactService";
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
            title: "Don"
        }
//     when
        await saveContact(contact)
//     then
        expect(axios.post).toHaveBeenCalledWith("/cms/api/contact/new", contact)
    })
})