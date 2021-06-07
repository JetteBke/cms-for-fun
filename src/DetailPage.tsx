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

        await saveNote(note, contactId)
    }

    return (
        <div className='container'>
            {contact ?
                <>
                    <h1 className='title'>{contact?.title} {contact?.lastName}</h1>
                    <div className='detail-container'>
                        <ViewContact contact={contact}/>
                        <NoteForm onSave={submitNote}/>
                    </div>
                </>
                : <h1 className='title'>Keine Details verfügbar</h1>}
        </div>
    )
}