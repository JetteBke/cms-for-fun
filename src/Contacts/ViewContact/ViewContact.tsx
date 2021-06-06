import React from "react";
import './ViewContact.css'
import {Contact} from "../Contact";

interface Props {
    contact: Contact,
}

export const ViewContact = ({contact}: Props) => {
    return (
        <>
            <div className='contact-details'>
                <div className='info-row'>
                    <span className='title-column'>Anrede</span>
                    <span>{contact?.title}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Vorname</span>
                    <span>{contact?.firstName}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Nachname</span>
                    <span>{contact?.lastName}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Firma</span>
                    <span>{contact?.company}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Straße und Hausnummer</span>
                    <span>{contact?.address}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Postleihzahl</span>
                    <span>{contact?.postalCode}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Stadt</span>
                    <span>{contact?.city}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Email 1</span>
                    <span>{contact?.emailOne}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Email 2</span>
                    <span>{contact?.emailTwo}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Telefon 1</span>
                    <span>{contact?.phoneOne}</span>
                </div>
                <div className='info-row'>
                    <span className='title-column'>Telefon 2</span>
                    <span>{contact?.phoneTwo}</span>
                </div>
            </div>
        </>
    )
}