import React, {useState} from "react";
import './ViewContact.css'
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
            <div className='view-contact-container'>
                {contact ?
                    <div>
                        <h1 className='title'>{contact?.title} {contact?.lastName}</h1>
                        <div className='contact-details'>
                            <div className='title-column'>
                                <span>Anrede</span>
                                <span>Vorname</span>
                                <span>Nachname</span>
                                <span>Firma</span>
                                <span>Straße und Hausnummer</span>
                                <span>Postleihzahl</span>
                                <span>Stadt</span>
                                <span>Email 1</span>
                                <span>Email 2</span>
                                <span>Telefon 1</span>
                                <span>Telefon 2</span>
                            </div>
                            <div className='info-column'>
                                <span>{contact?.title}</span>
                                <span>{contact?.firstName}</span>
                                <span>{contact?.lastName}</span>
                                <span>{contact?.company}</span>
                                <span>{contact?.address}</span>
                                <span>{contact?.postalCode}</span>
                                <span>{contact?.city}</span>
                                <span>{contact?.emailOne}</span>
                                <span>{contact?.emailTwo}</span>
                                <span>{contact?.phoneOne}</span>
                                <span>{contact?.phoneTwo}</span>
                            </div>
                        </div>
                    </div>
                    : <h1 className='title'>Keine Details verfügbar</h1>}
            </div>
        </>
    )
}