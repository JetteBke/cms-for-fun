import {getContact} from "./ContactService";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {EditContact} from "./EditContact";

jest.mock('./ContactService')

describe('EditContactForm', () => {
    it('should show data from contact when form is rendered',  async() => {
    //    given
        const contact ={
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
            id: 2
        }
        mocked(getContact).mockReturnValue(Promise.resolve(contact))
    //    when
        const wrapper = await render(<EditContact/>)
    //    then
        expect(wrapper.getByDisplayValue('some street 12')).toBeInTheDocument()
    })
})
