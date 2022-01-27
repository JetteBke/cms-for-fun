import {deleteContact, getContacts} from "../../Contacts/ContactService";
import {OverviewWithNotes} from "./OverviewWithNotes";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

jest.mock('./Contacts/ContactService')

describe('Contacts', () => {
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
        }]

    it('should pass contacts as prop to contacts table', async () => {
        //    given
        mocked(getContacts).mockReturnValue(Promise.resolve(contacts))
        //    when
        const wrapper = render(<OverviewWithNotes/>)
        await act(() => Promise.resolve())
        //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })

    it('should delete a contact and get full list of contacts again when user clicks delete button', async () => {
        //    given
        const originalConfirm = window.confirm
        window.confirm = jest.fn(() => true)
        mocked(getContacts).mockReturnValue(Promise.resolve(contacts))
        mocked(deleteContact).mockReturnValue(Promise.resolve(true))
        //    when
        const wrapper = render(<OverviewWithNotes/>)
        await act(() => Promise.resolve())
        //    then
        const button = await wrapper.findByTitle("Löschen")
        userEvent.click(button)

        await act(() => Promise.resolve())
        expect(deleteContact).toHaveBeenCalledTimes(1)
        expect(getContacts).toHaveBeenCalledTimes(2)
        window.confirm = originalConfirm
    })
})
