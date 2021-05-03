import React, {useState} from "react";
import './EditContact.css'
import {getContact} from "./ContactService";
import {Contact} from "./Contact";
import {useParams} from "react-router-dom";

interface Params {
    contactId: string
}

export const ViewContact: React.FC = () => {

    const {contactId} = useParams<Params>()
    const [contact, setContact] = useState<Contact>()

    React.useEffect(() => {
        getContact(parseInt(contactId)).then(resp => setContact(resp))
    }, [])

    return (
        <>
            <div className='edit-contact-container'>
                <h1 className='title'>{contact?.title} {contact?.lastName}</h1>
                <div className='contact-details'>

                    <div>
                        <span>Anrede</span>
                        <span>{contact?.title}</span>
                    </div>
                    <div>
                        <span>Vorname</span>
                        <span>{contact?.firstName}</span>
                    </div>
                    <div>
                        <span>Nachname</span>
                        <span>{contact?.lastName}</span>
                    </div>
                    <div>
                        <span>Straße und Hausnummer</span>
                        <span>{contact?.address}</span>
                    </div>
                    <div>
                        <span>Postleihzahl</span>
                        <span>{contact?.postalCode}</span>
                    </div>
                    <div>
                        <span>Stadt</span>
                        <span>{contact?.city}</span>
                    </div>
                    <div>
                        <span>Email 1</span>
                        <span>{contact?.emailOne}</span>
                    </div>
                    <div>
                        <span>Email 2</span>
                        <span>{contact?.emailTwo}</span>
                    </div>
                    <div>
                        <span>Telefon 1</span>
                        <span>{contact?.phoneOne}</span>
                    </div>
                    <div>
                        <span>Telefon 2</span>
                        <span>{contact?.phoneTwo}</span>
                    </div>
                </div>
            </div>
        </>
    )
}