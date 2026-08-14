import useSWRMutation from 'swr/mutation'
import {z} from 'zod'
import axios from 'axios'
import type { schema } from '../../ContactFormPage'

const createMessage = async (url: string, {arg} : {arg: z.infer<typeof schema>}) => {
    const response = await axios.post(url, arg)
    return response.data
}

const useCreateMessage = (url:string) => useSWRMutation(url, createMessage)

export default useCreateMessage