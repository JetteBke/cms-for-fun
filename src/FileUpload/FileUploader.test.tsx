import {render} from "@testing-library/react";
import {FileUploader} from "./FileUploader";
import userEvent from "@testing-library/user-event";
import {mocked} from "ts-jest/utils";
import {uploadFile} from "./FileUploadService";
import {act} from "react-dom/test-utils";

jest.mock('./FileUploadService')

describe('FileUploader', () => {

    const file = new File(['hello', 'world'], 'hello.csv', {type: 'csv'})
    let formData = new FormData()
    formData.append("file", file)

    it('should upload a file to backend and show a success message', async () => {
        //    given
        mocked(uploadFile).mockReturnValue(Promise.resolve(true))
        const wrapper = render(<FileUploader/>)

        //    when
        const input = wrapper.getByLabelText("Datei Input")
        userEvent.upload(input, file)
        userEvent.click(wrapper.getByRole('button'))

        await act(() => Promise.resolve())

        //    then
        expect(uploadFile).toHaveBeenCalledWith(formData)
        expect(wrapper.getByText('Datei wurde erfolgreich hochgeladen')).toBeInTheDocument()
    })

    it('should show a failure message when request to backend fails', async () => {
        //    given
        mocked(uploadFile).mockReturnValue(Promise.resolve(false))
        const wrapper = render(<FileUploader/>)
        //    when
        const input = wrapper.getByLabelText("Datei Input")
        userEvent.upload(input, file)
        userEvent.click(wrapper.getByRole('button'))

        await act(() => Promise.resolve())
        //    then
        expect(wrapper.getByText('Datei konnte nicht hochgeladen werden')).toBeInTheDocument()
    })

    it('should show a failure message when no file was selected for upload', () => {
        //    given
        const wrapper = render(<FileUploader/>)
        //    when
        userEvent.click(wrapper.getByRole('button'))
        //    then
        expect(wrapper.getByText('Keine Datei ausgewählt')).toBeInTheDocument()
    })
})