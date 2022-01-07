export interface Contact {
    id?: number
    title: string
    firstName?: string
    lastName: string
    company?: string
    address?: string
    postalCode?: string
    city?: string
    phoneOne?: string
    phoneTwo?: string
    emailOne?: string
    emailTwo?: string
    oldNote?: string
}

export const initialEmptyContact: Contact = {
    lastName: "", title: ""
}

export const ContactFixture: Array<Contact> = [{
    address: "some street 12",
    city: "cologne",
    emailOne: "ghjk@ghjk.com",
    emailTwo: "tyuio@78ijnm.com",
    firstName: "Detlef",
    lastName: "Doodle",
    phoneOne: "3456789",
    phoneTwo: "3456789",
    postalCode: "8765",
    title: "Don",
    company: "Don GmbH",
    id: 1
},
    {
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: "3456789",
        phoneTwo: "3456789",
        postalCode: "8765",
        title: "Don",
        company: "Don GmbH",
        id: 2
    },
    {
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: "3456789",
        phoneTwo: "3456789",
        postalCode: "8765",
        title: "Don",
        company: "Don GmbH",
        id: 3
    },
    {
        address: "some street 12",
        city: "cologne",
        emailOne: "ghjk@ghjk.com",
        emailTwo: "tyuio@78ijnm.com",
        firstName: "Detlef",
        lastName: "Doodle",
        phoneOne: "3456789",
        phoneTwo: "3456789",
        postalCode: "8765",
        title: "Don",
        company: "Don GmbH",
        id: 4
    }]