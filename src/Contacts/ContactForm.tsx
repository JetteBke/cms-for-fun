import React from "react"
import './ContactForm.css'

interface Props {
    // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ContactForm = ({onChange}: Props) => {
    const [successMessage, setSuccessMessage] = React.useState(false)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: post call to BE
        setSuccessMessage(true)
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
                            name='first-name'
                            id='first-name'
                            type='first-name'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Nachname</p>
                        <input
                            name='last-name'
                            id='last-name'
                            type='last-name'
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
                            name='postal-code'
                            id='postal-code'
                            type='postal-code'
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
                            name='phone-one'
                            id='phone-one'
                            type='phone-one'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Telefon 2</p>
                        <input
                            name='phone-two'
                            id='phone-two'
                            type='phone-two'
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Email 1</p>
                        <input
                            name='email-one'
                            id='email-one'
                            type='email-one'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-cell'>
                        <p className='form-cell-title'>Email 2</p>
                        <input
                            name='email-two'
                            id='email-two'
                            type='email-two'
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
