import React, {useState} from "react";
import {ContactForm} from "../ContactForm/ContactForm";
import {getContact, updateContact} from "../ContactService";
import {Contact} from "../Contact";
import {useParams} from "react-router-dom";

interface Params {
    contactId: string
}

export const EditContact: React.FC = () => {

    const {contactId} = useParams<Params>()
    const [contact, setContact] = useState<Contact>()

    React.useEffect( () => {
        getContact(parseInt(contactId)).then(resp => setContact(resp))
    },[])

    return (
        <>
            <div className='container'>
                <h1 className='title'>Kontakt bearbeiten</h1>
                {contact ?
                <ContactForm contact={contact} onSave={updateContact}/>
                : null}
            </div>
        </>
    )
}