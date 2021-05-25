import {render} from "@testing-library/react";
import {ContactForm} from "./ContactForm";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('ContactForm', () => {
    it('should show a success message when backend saves contact', async () => {
        //    given
        const fakeSave = jest.fn(() => true)
        const wrapper = render(<ContactForm onSave={fakeSave}/>)
        //    when
        userEvent.click(wrapper.getByRole('button'))
        await act(() => Promise.resolve())
        //    then
        expect(wrapper.getByText('Kontakt wurde gespeichert')).toBeInTheDocument()
    })

    it('should show a failure message when backend returns failure', async() => {
        //    given
        const fakeSave = jest.fn(() => false)
        const wrapper = render(<ContactForm onSave={fakeSave}/>)
        //    when
        userEvent.click(wrapper.getByRole('button'))
        await act(() => Promise.resolve())
        //    then
        expect(wrapper.getByText('Kontakt konnte nicht gespeichert werden')).toBeInTheDocument()
    })
})
