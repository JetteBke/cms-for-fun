import React, {useState} from "react";
import {getContact} from "./Contacts/ContactService";
import {Contact} from "./Contacts/Contact";
import {useParams} from "react-router-dom";
import {ViewContact} from "./Contacts/ViewContact/ViewContact";
import {NoteForm} from "./Notes/NoteForm";
import {Note} from "./Notes/Note";
import {getNotes, saveNote} from "./Notes/NoteService";

import './DetailPage.css'
import {NoteView} from "./Notes/NoteView";

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

    return (
        <div className='container'>
            {contact ?
                <>
                    <h1 className='title'>{contact?.title} {contact?.lastName}</h1>
                    <div className='detail-container'>
                        <ViewContact contact={contact}/>
                        <NoteView notes={notes}/>
                        <div className='create-note-container'>
                            <NoteForm onSave={submitNote}/>
                            {successMessage && <p className='success-message'>Notiz wurde gespeichert</p>}
                            {failureMessage && <p className='failure-message'>Notiz konnte nicht gespeichert werden</p>}
                        </div>
                    </div>
                </>
                : <h1 className='title'>Keine Details verfügbar</h1>}
        </div>
    )
}