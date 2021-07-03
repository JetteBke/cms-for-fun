import React from "react";
import {Note} from "./Note";
import './NoteView.css';

interface Props {
    notes: Array<Note>
}

export const NoteView = ({notes}: Props) => {

    return (
        <div className='note-details-container'>
            {notes.map(note =>
                <div key={note.text}>
                    <div className='date-info'>
                        <span>Erstellt am {new Date(note.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className='date-info'>
                        <span>Zuletzt geändert am {new Date(note.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <div className='note-content'>
                        <span>{note.text}</span>
                    </div>
                </div>
            )}
        </div>)
}