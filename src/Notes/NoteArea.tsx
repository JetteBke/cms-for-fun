import React from "react";
import {ViewNote} from "./ViewNote/ViewNote";
import {NoteForm} from "./NoteForm/NoteForm";
import {Note} from "./Note";
import './NoteArea.css'

interface Props {
    notes: Array<Note>,
    onSave: Function,
    success: Boolean,
    failure: Boolean
}

export const NoteArea = ({success, failure, notes, onSave}: Props) => {

    return (
        <>
            {notes && notes.length ?
                <ViewNote notes={notes}/>
                : <div className='no-notes-message'>Keine Notizen vorhanden</div>
            }
            <p className='separator'/>
            <NoteForm onSave={onSave}/>
            {success && <p className='success-message'>Notiz wurde gespeichert</p>}
            {failure && <p className='failure-message'>Notiz konnte nicht gespeichert werden</p>}
        </>)
}