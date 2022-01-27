import React, {useState} from "react";
import {getContact} from "../../Contacts/ContactService";
import {Contact} from "../../Contacts/Contact";
import {useParams} from "react-router-dom";
import {ViewContact} from "../../Contacts/ViewContact/ViewContact";
import {Note} from "../../Notes/Note";
import {deleteNote, getNotes, saveNote} from "../../Notes/NoteService";

import './DetailPage.css'
import {NoteArea} from "../../Notes/NoteArea";

interface Params {
    contactId: string
}

export const DetailPage: React.FC = () => {

    const {contactId} = useParams<Params>()
    const [successMessage, setSuccessMessage] = useState(false)
    const [failureMessage, setFailureMessage] = useState(false)
    const [contact, setContact] = useState<Contact>()
    const [notes, setNotes] = useState<Array<Note>>([])

    React.useEffect(() => {
        getContact(parseInt(contactId)).then(resp => setContact(resp))
        getNotes(contactId).then(resp => setNotes(resp))
    }, [contactId, successMessage])

    const submitNote = async (content: string) => {
        const note: Note = {
            createdAt: Date.now(),
            updatedAt: Date.now(),
            text: content
        }

        const success = await saveNote(note, contactId)
        setSuccessMessage(success)
        setFailureMessage(!success)
    }

    const deleteNoteAndRefresh = async (noteId: number) => {
        setSuccessMessage(false)
        setFailureMessage(false)
        await deleteNote(noteId)
        await getNotes(contactId).then(resp => setNotes(resp))
    }

    return (
        <div className='container'>
            {contact ?
                <>
                    <h1 className='title'>{contact?.title} {contact?.lastName}</h1>
                    <div className='detail-container'>
                        <p className='separator'/>
                        <ViewContact contact={contact}/>
                        <p className='separator'/>
                        <NoteArea
                            notes={notes}
                            onSave={submitNote}
                            failure={failureMessage}
                            success={successMessage}
                            onDelete={deleteNoteAndRefresh}
                        />
                    </div>
                </>
                : <h1 className='title'>Keine Details verfügbar</h1>}
        </div>
    )
}