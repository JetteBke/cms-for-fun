import {getContacts} from "./ContactService";
import {Contacts} from "./Contacts";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {act} from "react-dom/test-utils";

jest.mock('./ContactService')

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
        const wrapper = render(<Contacts/>)
        await act(() => Promise.resolve())
    //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })
})
