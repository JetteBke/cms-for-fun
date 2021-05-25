import React from "react";
import {ContactForm} from "../ContactForm/ContactForm";
import {saveContact} from "../ContactService";

export const AddContact: React.FC = () => {

    return (
        <>
            <div className='container'>
                <h1 className='title'>Kontakt hinzufügen</h1>
                <ContactForm onSave={saveContact}/>
            </div>
        </>
    )
}