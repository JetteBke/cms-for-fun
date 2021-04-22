import {getContacts} from "./ContactService";
import axios from "axios";
import {ContactFixture} from "./Contacts";

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
})