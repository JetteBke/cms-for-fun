import React from "react";
import './AddContact.css'
import {ContactForm} from "./ContactForm";
import {getContacts} from "./ContactService";

export const AddContact: React.FC = () => {

    const showMessage = async () => {
        await getContacts()
    }

    return (
        <>
            <div className='add-contact-container'>
                <h1 className='title'>Kontakt hinzufügen</h1>
                <ContactForm/>
                <button onClick={showMessage}>click</button>
            </div>
        </>
    )
}