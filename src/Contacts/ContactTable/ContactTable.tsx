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
                <th className='table-header-cell'>Anrede</th>
                <th className='table-header-cell'>Vorname</th>
                <th className='table-header-cell'>Nachname</th>
                <th className='table-header-cell'>Firma</th>
                <th className='table-header-cell'>Straße und Hausnummer</th>
                <th className='table-header-cell'>PLZ</th>
                <th className='table-header-cell'>Stadt</th>
                <th className='table-header-cell'>Email 1</th>
                <th className='table-header-cell'>Email 2</th>
                <th className='table-header-cell'>Telefon 1</th>
                <th className='table-header-cell'>Telefon 2</th>
                <th/>
            </tr>
            </thead>
            <tbody className='table-body'>
            {contacts.map((contact) =>
                (
                    <tr className='table-body-row' key={`${contact.id}`}>
                        <td className='table-body-cell'>{contact.title}</td>
                        <td className='table-body-cell'>{contact.firstName}</td>
                        <td className='table-body-cell'>{contact.lastName}</td>
                        <td className='table-body-cell'>{contact.company}</td>
                        <td className='table-body-cell'>{contact.address}</td>
                        <td className='table-body-cell'>{contact.postalCode}</td>
                        <td className='table-body-cell'>{contact.city}</td>
                        <td className='table-body-cell'>{contact.emailOne}</td>
                        <td className='table-body-cell'>{contact.emailTwo}</td>
                        <td className='table-body-cell'>{contact.phoneOne}</td>
                        <td className='table-body-cell'>{contact.phoneTwo}</td>
                        <td className='table-body-cell'>
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