import React, {useState} from "react";
import {ContactTable} from "./Contacts/ContactTable/ContactTable";
import {getContacts} from "./Contacts/ContactService";
import {Contact} from "./Contacts/Contact";

export const Overview: React.FC = () => {

    const [contacts, setContacts] = useState<Array<Contact>>()

    React.useEffect( () => {
        getContacts().then(resp => setContacts(resp))

    },[])

    return (
        <div className='container'>
            <h1 className='title'>Alle Kontakte</h1>
            {contacts && <ContactTable contacts={contacts}/>}
        </div>
    )
}