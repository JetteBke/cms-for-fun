import React, {useState} from "react";
import {getContact} from "./Contacts/ContactService";
import {Contact} from "./Contacts/Contact";
import {useParams} from "react-router-dom";
import {ViewContact} from "./Contacts/ViewContact/ViewContact";
import {NoteForm} from "./Notes/NoteForm";
import {Note} from "./Notes/Note";
import {saveNote} from "./Notes/NoteService";

import './DetailPage.css'

interface Params {
    contactId: string
}

export const DetailPage: React.FC = () => {

    const {contactId} = useParams<Params>()
    const [successMessage, setSuccessMessage] = useState(false)
    const [failureMessage, setFailureMessage] = useState(false)
    const [contact, setContact] = useState<Contact>()

    React.useEffect(() => {
        getContact(parseInt(contactId)).then(resp => setContact(resp))
    }, [contactId])

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