import React from "react";
import './AddContact.css'
import {ContactForm} from "./ContactForm";

export const AddContact: React.FC = () => {

    return (
        <>
            <div className='add-contact-container'>
                <h1 className='title'>Kontakt hinzufügen</h1>
                <ContactForm/>
            </div>
        </>
    )
}