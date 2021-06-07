import {getContacts} from "./Contacts/ContactService";
import {Overview} from "./Overview";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {act} from "react-dom/test-utils";

jest.mock('./Contacts/ContactService')

describe('Contacts', () => {
    it('should pass contacts as prop to contacts table',  async() => {
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
            id: 2
        }]
        mocked(getContacts).mockReturnValue(Promise.resolve(contacts))
    //    when
        const wrapper = render(<Overview/>)
        await act(() => Promise.resolve())
    //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })
})
