import React from "react";
import {useHistory} from "react-router-dom";
import {Contact} from "../Contact";
import './ContactTableWithNotes.css'
import {TrashIconWhite} from "../../Components/TrashIconGray";
import {ViewIcon} from "../../Components/ViewIcon";
import {EditIcon} from "../../Components/EditIcon";

interface Props {
    contacts: Array<Contact>,
    onDelete: Function
}

export const ContactTableWithNotes = ({contacts, onDelete}: Props) => {

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
        <table className='contact-table-with-notes'>
            <thead>
            <tr className='contact-table-header'>
                <th className='new-table-header-cell'>Anrede</th>
                <th className='new-table-header-cell'>Vorname</th>
                <th className='new-table-header-cell'>Nachname</th>
                <th className='new-table-header-cell'>Bemerkungen</th>
            </tr>
            </thead>
            <tbody className='table-body'>
            {contacts.map((contact) =>
                (
                    <tr className='table-body-row' key={`${contact.id}`}>
                        <td className='new-table-body-cell'>{contact.title}</td>
                        <td className='new-table-body-cell'>{contact.firstName}</td>
                        <td className='new-table-body-cell'>{contact.lastName}</td>
                        <td className='new-table-body-cell'>{contact.oldNote}</td>
                        <td className='new-table-body-cell'>
                            <div className='button-cell'>
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
                            </div>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}