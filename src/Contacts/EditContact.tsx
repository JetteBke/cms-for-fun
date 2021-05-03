import React, {useState} from "react";
import './EditContact.css'
import {ContactForm} from "./ContactForm";
import {getContact, updateContact} from "./ContactService";
import {Contact} from "./Contact";

export const EditContact: React.FC = () => {

    const [contact, setContact] = useState<Contact>()

    React.useEffect( () => {
        getContact(1).then(resp => setContact(resp))

    },[])

    return (
        <>
            <div className='edit-contact-container'>
                <h1 className='title'>Kontakt bearbeiten</h1>
                {contact && contact.title && contact.lastName &&
                <ContactForm contact={contact} onSave={updateContact}/>}
            </div>
        </>
    )
}