import {render} from "@testing-library/react";
import {FileUploader} from "./FileUploader";
import userEvent from "@testing-library/user-event";
import {mocked} from "ts-jest/utils";
import {uploadFile} from "./FileUploadService";

jest.mock('./FileUploadService')

describe('FileUploader', () => {
    it('should upload a file to backend', () => {
        //    given
        mocked(uploadFile).mockReturnValue(Promise.resolve(true))
        const file = new File(['hello', 'world'], 'hello.csv', {type: 'csv'})
        let formData = new FormData()
        formData.append("file", file)
        const wrapper = render(<FileUploader/>)
        //    when
        const input = wrapper.getByLabelText("Datei Input")
        userEvent.upload(input, file)
        userEvent.click(wrapper.getByRole('button'))
        //    then
        // expect(wrapper.getByText('Datei wurde erfolgreich hochgeladen')).toBeInTheDocument()
        expect(uploadFile).toHaveBeenCalledWith(formData)
    })
})