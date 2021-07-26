import {render} from "@testing-library/react";
import {ViewNote} from "./ViewNote";
import {NoteFixture} from "../Note";
import {mocked} from "ts-jest/utils";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import {deleteNote} from "../NoteService";

describe('Note View', () => {
    it('should show details of a note including dates in correct format', () => {
        const wrapper = render(<ViewNote notes={NoteFixture} onDelete={jest.fn()}/>)

        expect(wrapper.getByText(NoteFixture[0].text)).toBeInTheDocument()
        expect(wrapper.getByText('Erstellt am 7/3/2021')).toBeInTheDocument()
        expect(wrapper.getByText('Zuletzt geändert am 7/3/2021')).toBeInTheDocument()
    })

    // it('should show latest note first', () => {
    //     const wrapper = render(<ViewNote notes={NoteFixture}/>)
    //
    //     expect(wrapper.getAll(NoteFixture[0].text)).toBeInTheDocument()
    // })

    it('should delete a note when user clicks delete icon', async () => {
        const onDelete = jest.fn()
        const originalConfirm = window.confirm
        window.confirm = jest.fn(() => true)

        const wrapper = render(<ViewNote notes={NoteFixture} onDelete={onDelete}/>)

        const button = await wrapper.getAllByRole("img")[0]
        userEvent.click(button)

        await act(() => Promise.resolve())
        expect(onDelete).toHaveBeenCalledTimes(1)
        window.confirm = originalConfirm
    })
})