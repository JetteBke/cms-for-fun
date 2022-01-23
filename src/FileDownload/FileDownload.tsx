import React, {useState} from "react";
import './FileDownload.css'
import {exportToCsv} from "./CreateFile";
import {Contact} from "../Contacts/Contact";
import {getContacts} from "../Contacts/ContactService";

const withoutIds = (contacts: Array<Contact>): Array<Contact> => {
    contacts.forEach((c) => delete c.id)
    return contacts
}

export const FileDownload: React.FC = () => {

    const [fileName, setFileName] = React.useState<string | null>(null)
    const [contacts, setContacts] = useState<Array<Contact>>()

    React.useEffect(() => {
        getContacts().then(resp => setContacts(withoutIds(resp)))

    }, [])

    const onFileDownload = async () => {
        exportToCsv(fileName!!, contacts)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileName(event.target.value);
    };

    return (
        <>
            <div className='container'>
                <h1 className='title'>Datei herunterladen</h1>
                <div className='file-output-area'>
                    <p>Nur CSV Dateien werden ausgegeben.</p>
                    <input
                        name='text'
                        id='text'
                        type='text'
                        onChange={onChange}
                        required
                        placeholder='Dateiname'
                    />
                    <div>
                        <button className='file-download-button' onClick={onFileDownload}>Jetzt herunterladen</button>
                    </div>
                </div>
            </div>
        </>
    )
}