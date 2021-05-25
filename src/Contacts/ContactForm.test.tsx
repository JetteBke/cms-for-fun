import {render} from "@testing-library/react";
import {ContactForm} from "./ContactForm";
import userEvent from "@testing-library/user-event";

describe('ContactForm', () => {
    it('should show a success message on successful save', async () => {
        //    given
        const fakeSave = jest.fn(() => true)
        const wrapper = render(<ContactForm onSave={fakeSave}/>)
        //    when
        await userEvent.click(wrapper.getByRole('button'))
        //    then
        expect(wrapper.getByText('Kontakt wurde gespeichert')).toBeInTheDocument()
    })

    //TODO: was ist mit den mandatory fields?
    it('should show a failure message on unsuccessful save', async() => {
        //    given
        const fakeSave = jest.fn(() => false)
        const wrapper = render(<ContactForm onSave={fakeSave}/>)
        //    when
        await userEvent.click(wrapper.getByRole('button'))
        //    then
        expect(wrapper.getByText('Kontakt konnte nicht gespeichert werden')).toBeInTheDocument()
    })
})
