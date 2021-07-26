import React from "react";
import {Note} from "../Note";
import './ViewNote.css';
import {TrashIcon} from "../../Components/TrashIcon";

interface Props {
    notes: Array<Note>
    onDelete: Function
}

export const ViewNote = ({notes, onDelete}: Props) => {

    const orderedNotes = notes.sort((a: Note, b: Note) => {
        if (a.createdAt > b.createdAt) {
            return -1;
        }
        if (a.createdAt < b.createdAt) {
            return 1;
        }
        return 0;
    })

    const confirmNoteDeletion = (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Notiz wirklich löschen?")) {
            onDelete(id)
        }
    }

    return (
        <>
            <div className='note-details-container'>
                {orderedNotes.map(note =>
                    <div key={note.text}>
                        <div className='date-and-actions-area'>
                            <div className='date-info'>
                                <span>Erstellt am {new Date(note.createdAt).toLocaleDateString()}</span><br/>
                                <span>Zuletzt geändert am {new Date(note.updatedAt).toLocaleDateString()}</span>
                            </div>
                            <button onClick={() => confirmNoteDeletion(note.id!!)}
                                    className='trash-icon-button'>
                                <TrashIcon/>
                            </button>
                        </div>
                        <div className='note-content'>
                            <span>{note.text}</span>
                        </div>
                    </div>
                )}
            </div>
        </>)
}