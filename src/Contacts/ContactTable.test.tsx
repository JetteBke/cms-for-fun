import {render} from "@testing-library/react";
import {ContactTable} from "./ContactTable";
import {Contact} from "./Contact";
import userEvent from "@testing-library/user-event";

jest.mock('./ContactService')

const mockedFn = jest.fn()

jest.mock('react-router-dom', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(jest.requireActual('react-router-dom') as any),
    useHistory: () => ({
        push: mockedFn
    })
}))

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
        const wrapper = render(<ContactTable contacts={contacts}/>)

        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })

    it('should have a button which sends user to detail view of a contact', async () => {
        const wrapper = render(<ContactTable contacts={contacts}/>)

        const button = await wrapper.findByRole("button")
        userEvent.click(button)

        expect(mockedFn).toHaveBeenCalledTimes(1)
    })
})
