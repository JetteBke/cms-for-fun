import React from "react";
import {Contact} from "./Contact";
import './ContactTable.css'

interface Props {
    contacts: Array<Contact>
}

export const ContactTable = ({contacts}: Props) => {
    return (
        <table className='contact-table'>
            <thead>
            <tr>
                <th>Anrede</th>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Straße und Hausnummer</th>
                <th>Postleihzahl</th>
                <th>Stadt</th>
                <th>Email 1</th>
                <th>Email 2</th>
                <th>Telefon 1</th>
                <th>Telefon 2</th>
            </tr>
            </thead>
            <tbody className='table-body'>
            {contacts.map((contact) =>
                (
                    <tr>
                        <td>{contact.title}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.address}</td>
                        <td>{contact.postalCode}</td>
                        <td>{contact.city}</td>
                        <td>{contact.emailOne}</td>
                        <td>{contact.emailTwo}</td>
                        <td>{contact.phoneOne}</td>
                        <td>{contact.phoneTwo}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}