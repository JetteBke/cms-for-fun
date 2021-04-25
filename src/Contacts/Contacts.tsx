import React, {useState} from "react";
import './Contacts.css'
import {ContactTable} from "./ContactTable";
import {getContacts} from "./ContactService";
import {Contact} from "./Contact";

export const Contacts: React.FC = () => {

    const [contacts, setContacts] = useState<Array<Contact>>()

    React.useEffect( () => {
        getContacts().then(resp => setContacts(resp))

    },[])

    return (
        <div className='contacts-container'>
            <h1 className='title'>Alle Kontakte</h1>
            {contacts && <ContactTable contacts={contacts}/>}
        </div>
    )
}