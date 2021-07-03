import {render} from "@testing-library/react";
import {ViewNote} from "./ViewNote";
import {NoteFixture} from "../Note";

describe('Note View', () => {
    it('should show details of a note', () => {
        const wrapper = render(<ViewNote notes={NoteFixture}/>)

        expect(wrapper.getByText(NoteFixture[0].text)).toBeInTheDocument()
    })
})