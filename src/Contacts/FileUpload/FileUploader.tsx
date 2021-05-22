import React from "react";
import './FileUploader.css'
import {uploadFile} from "./FileUploadService";

export const FileUploader: React.FC = () => {

    const [file, setFile] = React.useState<FileList | null>()

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
            setFile(event.target.files)
    }

    const onFileUpload = async () => {
        if (file) {
            let formData = new FormData()
            formData.append("file", file[0])

            return await uploadFile(formData)
        }
        return false
    }

    return (
        <>
            <div className='file-uploader-container'>
                <h1 className='upload-title'>Datei hochladen</h1>
                <p>Nur CSV Dateien werden akzeptiert. <br/>
                Die Kontaktdaten aus der hochgeladenen Datei werden direkt in der Datenbank gespeichert, vorausgesetzt das Format ist in Ordnung.</p>
                <div className='file-input-form'>
                    <label htmlFor='file-uploader' className='file-input-title'>Datei Input</label>
                    <input
                        id='file-uploader'
                        type='file'
                        onChange={onFileChange}
                    />
                </div>
                <button className='file-uploader-button' onClick={onFileUpload}>Jetzt hinzufügen</button>
            </div>
        </>
    )
}