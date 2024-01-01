import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading('loading....')
        setData(null)
        setError(null)

        axios.get(url, {

        }).then(function (res) {
            console.log(res)
            setIsLoading(null)
            setData(res);
        }).catch((error) => {
            console.log(error);
            setData(false);
        });
    }, [url])

    return { data, isLoading, error }
}

export default useFetch;