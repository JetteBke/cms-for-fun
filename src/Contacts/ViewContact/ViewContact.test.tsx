import {getContact} from "../ContactService";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {ViewContact} from "./ViewContact";
import {useParams} from "react-router-dom";

jest.mock('./ContactService')

describe('ViewContact', () => {
    it('should show details of a contact',  async() => {
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
            company: "Don GmbH",
            id: contactId
        }
        mocked(getContact).mockReturnValue(Promise.resolve(contact))
        mocked(useParams).mockReturnValue({contactId: contactId.toString()})
    //    when
        const wrapper = await render(<ViewContact/>)
    //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
        expect(getContact).toHaveBeenCalledWith(contactId)
    })
})
