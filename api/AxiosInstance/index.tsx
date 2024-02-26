import axios from "axios";


export const AxiosInstance= axios.create({
    baseURL:process.env.NEXT_API_URL
})

