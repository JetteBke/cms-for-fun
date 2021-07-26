import React from "react";
import {ContactForm} from "../ContactForm/ContactForm";
import {saveContact} from "../ContactService";
import {Contact} from "../Contact";
import {useHistory} from "react-router-dom";

export const AddContact: React.FC = () => {

    const history = useHistory()
    const saveContactAndRedirect = async (contact: Contact) => {
        const successfulSave = await saveContact(contact)
        if (successfulSave) {
            history.push({
                pathname: '/list',
            })
        }
    }

    return (
        <>
            <div className='container'>
                <h1 className='title'>Kontakt hinzufügen</h1>
                <ContactForm onSave={saveContactAndRedirect}/>
            </div>
        </>
    )
}