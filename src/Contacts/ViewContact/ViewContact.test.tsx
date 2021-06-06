import {getContact} from "../ContactService";
import {render} from "@testing-library/react";
import {mocked} from 'ts-jest/utils';
import {ViewContact} from "./ViewContact";
import {useParams} from "react-router-dom";
import {act} from "react-dom/test-utils";

jest.mock('../ContactService')

describe('ViewContact', () => {
    it('should show details of a contact',  async() => {
    //    given
        const contact ={
            address: "some street 12",
            city: "cologne",
            emailOne: "ghjk@ghjk.com",
            emailTwo: "tyuio@78ijnm.com",
            firstName: "Detlef",
            lastName: "Doodle",
            phoneOne: 3456789,
            phoneTwo: 3456788,
            postalCode: 8765,
            title: "Don",
            company: "Don GmbH",
            id: 2
        }
    //    when
        const wrapper = render(<ViewContact contact={contact}/>)
    //    then
        expect(wrapper.getByText('some street 12')).toBeInTheDocument()
        expect(wrapper.getByText('cologne')).toBeInTheDocument()
        expect(wrapper.getByText("ghjk@ghjk.com")).toBeInTheDocument()
        expect(wrapper.getByText("tyuio@78ijnm.com")).toBeInTheDocument()
        expect(wrapper.getByText("Detlef")).toBeInTheDocument()
        expect(wrapper.getByText("Doodle")).toBeInTheDocument()
        expect(wrapper.getByText('3456789')).toBeInTheDocument()
        expect(wrapper.getByText('3456788')).toBeInTheDocument()
        expect(wrapper.getByText('8765')).toBeInTheDocument()
        expect(wrapper.getByText("Don")).toBeInTheDocument()
    })
})
