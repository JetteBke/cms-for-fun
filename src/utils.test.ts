import {sortByLastName} from "./utils";

describe('Utils', () => {
    const contacts = [{
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: "3456789",
        phoneTwo: "3456789",
        postalCode: "8765",
        title: "Don",
        id: 2
    },
        {
            address: "some street 12",
            city: "cologne",
            emailOne: "ghjk@ghjk.com",
            emailTwo: "tyuio@78ijnm.com",
            firstName: "Detlef",
            lastName: "Boodle",
            phoneOne: "3456789",
            phoneTwo: "3456789",
            postalCode: "8765",
            title: "Don",
            id: 3
        }]

    it('should filter contacts by last name', () => {
        //    given
        const expectedOrder = [contacts[1], contacts[0]]
        //    when
        const contactsOrder = sortByLastName(contacts)
        //    then
        expect(expectedOrder).toEqual(contactsOrder)
    })
})