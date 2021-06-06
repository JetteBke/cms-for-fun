import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import {DetailPage} from "./DetailPage";
import {mocked} from "ts-jest/utils";
import {getContact} from "./ContactService";
import {useParams} from "react-router-dom";

jest.mock('./ContactService')

describe('DetailPage', () => {
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

    it('should pass contact id as prop to detail contact view',  async() => {
    //    given
        mocked(getContact).mockReturnValue(Promise.resolve(contact))
        mocked(useParams).mockReturnValue({contactId: contactId.toString()})
    //    when
        const wrapper = render(<DetailPage/>)
        await act(() => Promise.resolve())
    //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })
})
