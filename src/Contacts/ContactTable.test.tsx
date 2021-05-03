import {render} from "@testing-library/react";
import {ContactTable} from "./ContactTable";
import {Link} from "react-router-dom";
import {Contact} from "./Contact";
import {shallow} from "enzyme";

jest.mock('./ContactService')

describe('ContactTable', () => {
    it('should show contact data',  async() => {
    //    given
        const contacts: Array<Contact> = [{
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
            id: 100
        }]
    //    when
        const wrapper = render(<ContactTable contacts={contacts}/>)
    //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })

    // TODO: Fix usage of enzyme
    // it('should link to detail view of a contact',  async() => {
    //     //    given
    //     const contactId = 100
    //     const contacts: Array<Contact> = [{
    //         address: "some street 12",
    //         city: "cologne",
    //         emailOne: "ghjk@ghjk.com",
    //         emailTwo: "tyuio@78ijnm.com",
    //         firstName: "Detlef",
    //         lastName: "Doodle",
    //         phoneOne: 3456789,
    //         phoneTwo: 3456789,
    //         postalCode: 8765,
    //         title: "Don",
    //         id: contactId
    //     }]
    //     //    when
    //     const wrapper = shallow(<ContactTable contacts={contacts}/>)
    //     //    then
    //     expect(wrapper.find(Link).prop("to")).toEqual(`view/${contactId}`)
    // })
})
