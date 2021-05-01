import {render} from "@testing-library/react";
import {ContactTable} from "./ContactTable";

jest.mock('./ContactService')

describe('ContactTable', () => {
    it('should show contact data',  async() => {
    //    given
        const contacts = [{
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
})
