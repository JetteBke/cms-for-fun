import {render} from "@testing-library/react";
import {ContactTable} from "./ContactTable";
import {Contact} from "../Contact";
import userEvent from "@testing-library/user-event";
import {useHistory} from "react-router-dom";
import { mocked } from "ts-jest/utils";

jest.mock('../ContactService')

describe('ContactTable', () => {
    const contactId = 100
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
        id: contactId
    }]

    it('should show contact data', () => {
        const wrapper = render(<ContactTable contacts={contacts} onDelete={jest.fn()}/>)

        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })

    it('should have a button which sends user to detail view of a contact', async () => {
        const mockPush = jest.fn()
        mocked(useHistory).mockReturnValue({ push: mockPush })
        const wrapper = render(<ContactTable contacts={contacts} onDelete={jest.fn()}/>)

        const button = await wrapper.findByText("Details")
        userEvent.click(button)

        expect(mockPush).toHaveBeenCalledTimes(1)
    })

    it('should have a button which sends user to edit view of a contact', async () => {
        const mockPush = jest.fn()
        mocked(useHistory).mockReturnValue({ push: mockPush })
        const wrapper = render(<ContactTable contacts={contacts} onDelete={jest.fn()}/>)

        const button = await wrapper.findByText("Bearbeiten")
        userEvent.click(button)

        expect(mockPush).toHaveBeenCalledTimes(1)
    })
})
