import React from "react";
import {ViewNote} from "./ViewNote/ViewNote";
import {NoteForm} from "./NoteForm/NoteForm";
import {Note} from "./Note";
import './NoteArea.css'

interface Props {
    notes: Array<Note>,
    onSave: Function,
    success: Boolean,
    failure: Boolean,
    onDelete: Function
}

export const NoteArea = ({success, failure, notes, onSave, onDelete}: Props) => {

    return (
        <>
            {notes && notes.length ?
                <ViewNote notes={notes} onDelete={onDelete}/>
                : <div className='no-notes-message'>Keine Notizen vorhanden</div>
            }
            <p className='separator'/>
            <NoteForm onSave={onSave}/>
            {/*commented out below lines for testing purposes*/}
            {/*{success && <p className='success-message'>Notiz wurde gespeichert</p>}*/}
            {/*{failure && <p className='failure-message'>Notiz konnte nicht gespeichert werden</p>}*/}
        </>)
}