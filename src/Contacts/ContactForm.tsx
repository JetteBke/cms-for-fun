import React from "react"

interface Props {
    onSubmit: () => void
    onChange: () => void
}

export const ContactForm: ({onSubmit, onChange}: Props) => JSX.Element = ({onSubmit, onChange} : Props) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    required
                />

                <input
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                />
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}
