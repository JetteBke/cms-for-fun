import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import {DetailPage} from "./DetailPage";
import {mocked} from "ts-jest/utils";
import {getContact} from "./ContactService";
import {useParams} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {getNotes, saveNote} from "../Notes/NoteService";
import {NoteFixture} from "../Notes/Note";

jest.mock('./ContactService')
jest.mock('../Notes/NoteService')

describe('DetailPage', () => {
    const mockedDateNow = 1487076708000 //14.02.2017
    const contactId = 2
    const contact = {
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
        id: contactId
    }

    beforeEach(() => {
        HTMLFormElement.prototype.submit = jest.fn()
        Date.now = jest.fn(() => mockedDateNow)
        mocked(getContact).mockReturnValue(Promise.resolve(contact))
        mocked(getNotes).mockReturnValue(Promise.resolve(NoteFixture))
        mocked(saveNote).mockReturnValue(Promise.resolve())
        mocked(useParams).mockReturnValue({contactId: contactId.toString()})
    })

    it('should pass contact id as prop to detail contact view', async () => {
        const wrapper = render(<DetailPage/>)
        await act(() => Promise.resolve())

        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
    })

    it('should save a note and send it to the service on submit', async () => {
        const wrapper = render(<DetailPage/>)
        await act(() => Promise.resolve())

        userEvent.type(wrapper.getByRole('textbox'), 'This is a note.')
        userEvent.click(wrapper.getByText("Speichern"))
        await act(() => Promise.resolve())

        expect(saveNote).toHaveBeenCalledWith({
                "createdAt": mockedDateNow,
                "text": 'This is a note.',
                "updatedAt": mockedDateNow
            },
            contactId.toString()
        )
    })

    it('should show a success message when note is saved', async () => {
        mocked(saveNote).mockReturnValue(Promise.resolve(true))
        const wrapper = render(<DetailPage/>)
        await act(() => Promise.resolve())

        userEvent.type(wrapper.getByRole('textbox'), 'This is a note.')
        userEvent.click(wrapper.getByText("Speichern"))
        await act(() => Promise.resolve())

        expect(wrapper.getByText('Notiz wurde gespeichert')).toBeInTheDocument()
    })

    it('should show a failure message when note is not saved successfully', async () => {
        mocked(saveNote).mockReturnValue(Promise.resolve(false))
        const wrapper = render(<DetailPage/>)
        await act(() => Promise.resolve())

        userEvent.type(wrapper.getByRole('textbox'), 'This is a note.')
        userEvent.click(wrapper.getByText("Speichern"))
        await act(() => Promise.resolve())

        expect(wrapper.getByText('Notiz konnte nicht gespeichert werden')).toBeInTheDocument()
    })
})
