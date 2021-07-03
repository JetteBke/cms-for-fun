import {render} from "@testing-library/react";
import {NoteView} from "./NoteView";
import {NoteFixture} from "./Note";

describe('Note View', () => {
    it('should show details of a note', () => {
        const wrapper = render(<NoteView notes={NoteFixture}/>)

        expect(wrapper.getByText(NoteFixture[0].text)).toBeInTheDocument()
    })
})