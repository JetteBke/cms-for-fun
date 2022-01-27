import React, {useState} from "react";
import {deleteContact, getContacts} from "../../Contacts/ContactService";
import {Contact} from "../../Contacts/Contact";
import {sortByLastName} from "../../utils";
import {ContactTableWithNotes} from "../../Contacts/ContactTableWithNotes/ContactTableWithNotes";

export const OverviewWithNotes: React.FC = () => {

    const [contacts, setContacts] = useState<Array<Contact>>()

    React.useEffect( () => {
        getContacts().then(resp => setContacts(resp))

    },[])

    const removeContact = async (contactId: number) => {
        await deleteContact(contactId)
        await getContacts().then(resp => setContacts(resp))
    }

    return (
        <div className='container'>
            <h1 className='title'>Alle Kontakte</h1>
            {contacts && <ContactTableWithNotes contacts={sortByLastName(contacts)} onDelete={removeContact}/>}
        </div>
    )
}