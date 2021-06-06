import React, {useState} from "react";
import {getContact} from "./ContactService";
import {Contact} from "./Contact";
import {useParams} from "react-router-dom";
import {ViewContact} from "./ViewContact/ViewContact";

interface Params {
    contactId: string
}

export const DetailPage: React.FC = () => {

    const {contactId} = useParams<Params>()
    const [contact, setContact] = useState<Contact>()

    React.useEffect(() => {
        getContact(parseInt(contactId)).then(resp => setContact(resp))
    }, [contactId])

    return (
        <div className='container'>
            {contact ?
                <>
                    <h1 className='title'>{contact?.title} {contact?.lastName}</h1>
                    <ViewContact contact={contact}/>
                </>
                : <h1 className='title'>Keine Details verfügbar</h1>}
        </div>
    )
}