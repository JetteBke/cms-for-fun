import React, { useState} from "react";
import './AddContact.css'
import {ContactForm} from "./ContactForm";

export const AddContact: React.FC = () => {
    const [values, setValues] = useState({});

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values, [event.target.name]:
            event.target.value
        });
    };

    return (
        <>
            <div className='add-contact-container'>
                <h1 className='title'>Kontakt hinzufügen</h1>
                <ContactForm onChange={onChange}/>
            </div>
        </>
    )
}