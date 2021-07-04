import React, {useState} from "react";
import {ContactForm} from "../ContactForm/ContactForm";
import {getContact, updateContact} from "../ContactService";
import {Contact} from "../Contact";
import {useHistory, useParams} from "react-router-dom";

interface Params {
    contactId: string
}

export const EditContact: React.FC = () => {

    const {contactId} = useParams<Params>()
    const history = useHistory()
    const [contact, setContact] = useState<Contact>()

    React.useEffect(() => {
        getContact(parseInt(contactId)).then(resp => setContact(resp))
    }, [])

    const updateContactAndRedirect = async (contact: Contact) => {
        await updateContact(contact)
        history.push({
            pathname: `/view/${contactId}`,
        })
    }

    return (
        <>
            <div className='container'>
                <h1 className='title'>Kontakt bearbeiten</h1>
                {contact ?
                    <ContactForm contact={contact} onSave={updateContactAndRedirect}/>
                    : null}
            </div>
        </>
    )
}