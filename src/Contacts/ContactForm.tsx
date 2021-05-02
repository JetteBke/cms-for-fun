import React, {useState} from "react"
import './ContactForm.css'
import {Contact} from "./Contact";

interface Props {
    contact?: Contact,
    onSave: Function
}

export const ContactForm = ({contact, onSave}: Props) => {

    const [successMessage, setSuccessMessage] = React.useState(false)
    const [values, setValues] = useState(contact || {})

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSave(values as Contact)
        setSuccessMessage(true)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values, [event.target.name]:
            event.target.value
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='form-container'>
                <div className='form-cell'>
                    <p className='form-cell-title'>Anrede</p>
                    <input
                        name='title'
                        id='title'
                        type='title'
                        onChange={onChange}
                        value={contact?.title}
                        required
                    />
                </div>
                <div className='form-row'>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Vorname</p>
                        <input
                            name='firstName'
                            id='firstName'
                            type='firstName'
                            value={contact?.firstName}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Nachname</p>
                        <input
                            name='lastName'
                            id='lastName'
                            type='lastName'
                            value={contact?.lastName}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <div className='form-cell'>
                    <p className='form-cell-title'>Straße und Hausnummer</p>
                    <input
                        name='address'
                        id='address'
                        type='address'
                        value={contact?.address}
                        onChange={onChange}
                    />
                </div>
                <div className='form-row'>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Postleihzahl</p>
                        <input
                            name='postalCode'
                            id='postalCode'
                            type='postalCode'
                            value={contact?.postalCode}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Stadt</p>
                        <input
                            name='city'
                            id='city'
                            type='city'
                            value={contact?.city}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Telefon 1</p>
                        <input
                            name='phoneOne'
                            id='phoneOne'
                            type='phoneOne'
                            value={contact?.phoneOne}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Telefon 2</p>
                        <input
                            name='phoneTwo'
                            id='phoneTwo'
                            type='phoneTwo'
                            value={contact?.phoneTwo}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Email 1</p>
                        <input
                            name='emailOne'
                            id='emailOne'
                            type='emailOne'
                            value={contact?.emailOne}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Email 2</p>
                        <input
                            name='emailTwo'
                            id='emailTwo'
                            type='emailTwo'
                            value={contact?.emailTwo}
                            onChange={onChange}
                        />
                    </div>
                </div>
                {successMessage && <p className='success-message'>Kontakt wurde gespeichert</p>}
                <button className='form-submit-button' type='submit'>Speichern</button>
            </div>
        </form>
    )
}
