import {getContact, updateContact} from "../ContactService";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {EditContact} from "./EditContact";
import {useParams} from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock('./ContactService')

describe('EditContactForm', () => {
    const contactId = 2
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
        id: contactId
    }

    it('should show data from contact when form is rendered', async () => {
        //    given
        mocked(getContact).mockReturnValue(Promise.resolve(contact))
        mocked(useParams).mockReturnValue({contactId: contactId.toString()})
        //    when
        const wrapper = await render(<EditContact/>)
        //    then
        expect(wrapper.getByDisplayValue('some street 12')).toBeInTheDocument()
        expect(getContact).toHaveBeenCalledWith(contactId)
    })

    // TODO make this pass
    // it('should save new data when user clicks save', async () => {
    //     //    given
    //     mocked(getContact).mockReturnValue(Promise.resolve(contact))
    //     mocked(useParams).mockReturnValue({contactId: contactId.toString()})
    //     mocked(updateContact).mockReturnValue(Promise.resolve(true))
    //     const wrapper = await render(<EditContact/>)
    //
    //     //    when
    //     const updatedFirstName = "Detto"
    //     const input = wrapper.getByText("Vorname")
    //     userEvent.type(input, updatedFirstName)
    //
    //     // await Promise.resolve()
    //     userEvent.click(wrapper.getByRole('button'))
    //
    //     // await Promise.resolve()
    //     //    then
    //     expect(updateContact).toHaveBeenCalledWith({...contact, firstName: updatedFirstName})
    // })
})
