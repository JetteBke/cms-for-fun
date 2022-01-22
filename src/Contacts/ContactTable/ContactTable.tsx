import React from "react";
import {useHistory} from "react-router-dom";
import {Contact} from "../Contact";
import './ContactTable.css'
import {TrashIconWhite} from "../../Components/TrashIconGray";
import {ViewIcon} from "../../Components/ViewIcon";
import {EditIcon} from "../../Components/EditIcon";

interface Props {
    contacts: Array<Contact>,
    onDelete: Function
}

export const ContactTable = ({contacts, onDelete}: Props) => {

    const history = useHistory()
    const routeToDetailPage = (id?: number) => {
        history.push({
            pathname: `/view/${id}`,
        })
    }

    const routeToEditPage = (id?: number) => {
        history.push({
            pathname: `/edit/${id}`,
        })
    }

    const removeContact = async (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Kontakt wirklich löschen?")) {
            onDelete(id)
        }
    }

    return (
        <table className='contact-table'>
            <thead>
            <tr className='contact-table-header'>
                <th>Anrede</th>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Firma</th>
                <th>Straße und Hausnummer</th>
                <th>PLZ</th>
                <th>Stadt</th>
                <th>Email 1</th>
                <th>Email 2</th>
                <th>Telefon 1</th>
                <th>Telefon 2</th>
                <th/>
            </tr>
            </thead>
            <tbody className='table-body'>
            {contacts.map((contact) =>
                (
                    <tr className='table-body-row' key={`${contact.id}`}>
                        <td>{contact.title}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.company}</td>
                        <td>{contact.address}</td>
                        <td>{contact.postalCode}</td>
                        <td>{contact.city}</td>
                        <td>{contact.emailOne}</td>
                        <td>{contact.emailTwo}</td>
                        <td>{contact.phoneOne}</td>
                        <td>{contact.phoneTwo}</td>
                        <td>
                            <button
                                title="Details"
                                className='redirect-button'
                                onClick={() => routeToDetailPage(contact.id)}>
                                <ViewIcon/>
                            </button>
                            <button
                                title="Bearbeiten"
                                className='redirect-button'
                                onClick={() => routeToEditPage(contact.id)}>
                                <EditIcon/>
                            </button>
                            <button
                                title="Löschen"
                                className='redirect-button'
                                onClick={() => removeContact(contact.id!)}>
                                <TrashIconWhite/>
                            </button>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}