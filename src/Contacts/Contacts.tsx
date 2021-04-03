import React from "react";
import './Contacts.css'
import {ContactTable} from "./ContactTable";
import {Contact} from "./Contact";

const ContactFixture: Array<Contact> = [{
    address: "some street 12",
    city: "cologne",
    emailOne: "ghjk@ghjk.com",
    emailTwo: "tyuio@78ijnm.com",
    firstName: "Detlef",
    lastName: "Doodle",
    phoneOne: 3456789,
    phoneTwo: 3456789,
    postalCode: 8765,
    title: "Don"
},
    {
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: 3456789,
        phoneTwo: 3456789,
        postalCode: 8765,
        title: "Don"
    },
    {
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: 3456789,
        phoneTwo: 3456789,
        postalCode: 8765,
        title: "Don"
    },
    {
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: 3456789,
        phoneTwo: 3456789,
        postalCode: 8765,
        title: "Don"
    }]

export const Contacts: React.FC = () => {
    return (
        <div className='contacts-container'>
            <h1 className='title'>Alle Kontakte</h1>
            <ContactTable contacts={ContactFixture}/>
        </div>
    )
}