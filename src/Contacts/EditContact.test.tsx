import {getContact} from "./ContactService";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {EditContact} from "./EditContact";
import {useParams} from "react-router-dom";

jest.mock('./ContactService')

describe('EditContactForm', () => {
    it('should show data from contact when form is rendered',  async() => {
    //    given
        const contactId = 2
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
            id: contactId
        }
        mocked(getContact).mockReturnValue(Promise.resolve(contact))
        mocked(useParams).mockReturnValue({contactId: contactId.toString()})
        //    when
        const wrapper = await render(<EditContact/>)
    //    then
        expect(wrapper.getByDisplayValue('some street 12')).toBeInTheDocument()
        expect(getContact).toHaveBeenCalledWith(contactId)
    })
})
