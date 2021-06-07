import React from "react";
import './NoteForm.css';

interface Props {
    onSave: Function
}

export const NoteForm = ({onSave}: Props) => {

    const [text, setText] = React.useState<string | null>(null)
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await onSave(text)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='note-form'>
                    <p>Notiz anlegen</p>
                    <input
                        name='text'
                        id='text'
                        type='text'
                        onChange={onChange}
                        required
                        placeholder='Text eingeben'
                    />
                    <button className='form-submit-button' type='submit'>Speichern</button>
                </div>
            </form>
        </div>
    )
}