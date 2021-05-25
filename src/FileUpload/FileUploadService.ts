import axios from "axios";

export const uploadFile = async (formData: FormData): Promise<boolean> => {
    try {
        const response = await axios.post(
            `/cms/api/fileUpload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        )
        return (response.status === 201)
    } catch (err) {
        return false
    }
}