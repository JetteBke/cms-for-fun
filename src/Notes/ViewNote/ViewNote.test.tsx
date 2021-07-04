import {render} from "@testing-library/react";
import {ViewNote} from "./ViewNote";
import {NoteFixture} from "../Note";

describe('Note View', () => {
    it('should show details of a note including dates in correct format', () => {
        const wrapper = render(<ViewNote notes={NoteFixture}/>)

        expect(wrapper.getByText(NoteFixture[0].text)).toBeInTheDocument()
        expect(wrapper.getByText('Erstellt am 7/3/2021')).toBeInTheDocument()
        expect(wrapper.getByText('Zuletzt geändert am 7/3/2021')).toBeInTheDocument()
    })

    // it('should show latest note first', () => {
    //     const wrapper = render(<ViewNote notes={NoteFixture}/>)
    //
    //     expect(wrapper.getAll(NoteFixture[0].text)).toBeInTheDocument()
    // })
})