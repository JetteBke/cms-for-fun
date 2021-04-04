import React, {useState} from "react"
import './ContactForm.css'
import {saveContact} from "./ContactService";
import {Contact} from "./Contact";


export const ContactForm = () => {

    const [successMessage, setSuccessMessage] = React.useState(false)
    const [values, setValues] = useState({});

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await saveContact(values as Contact)
        setSuccessMessage(true)
    };

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
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Nachname</p>
                        <input
                            name='lastName'
                            id='lastName'
                            type='lastName'
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
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Stadt</p>
                        <input
                            name='city'
                            id='city'
                            type='city'
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
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Telefon 2</p>
                        <input
                            name='phoneTwo'
                            id='phoneTwo'
                            type='phoneTwo'
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
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Email 2</p>
                        <input
                            name='emailTwo'
                            id='emailTwo'
                            type='emailTwo'
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
