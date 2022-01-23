import {NoteForm} from "./NoteForm";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Note Form', () => {
    it('should have a text input field with a title', () => {
        const wrapper = render(<NoteForm onSave={jest.fn(e => e.preventDefault())}/>)

        expect(wrapper.getByPlaceholderText('Text eingeben')).toBeInTheDocument()
        expect(wrapper.getByText('Notiz anlegen')).toBeInTheDocument()
    })

    it('should call function from props on form submit', () => {
        const mockedFn = jest.fn(e => e.preventDefault())

        const wrapper = render(<NoteForm onSave={mockedFn}/>)

        userEvent.click(wrapper.getByRole('button'))

        expect(mockedFn).toHaveBeenCalledTimes(1)
    })
})