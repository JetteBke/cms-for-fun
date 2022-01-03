import axios from "axios";
import {uploadFile} from "./FileUploadService";

jest.mock('axios')

// describe('file uploader service test', () => {
//     it("should get all contacts", async () => {
// //     given
//         let formData = new FormData()
//         formData.append('firstName','Baba')
//         axios.post.mockImplementation(() => Promise.resolve({status: 201}))
// //     when
//         const result = await uploadFile(formData)
// //     then
//         expect(result).toBe(true)
//     })
// })