
import { useState, useEffect } from 'react'
import axiosIntance from '../../services/api/axiosInstance'

export default function useAxios(config) {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axiosIntance(config);
                setData(result.data)
            } catch (error) {
                console.log(error)
            }
        }

        getData();

        return () => {

        }
    }, [])



    return { data };
}
