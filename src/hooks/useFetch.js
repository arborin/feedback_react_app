import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (url) => {
    const baseUrl = "https://catfact.ninja"
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = (options = {}) => {
        setIsLoading(true)
        setOptions(options)

        // console.log(options);
    }


    useEffect(() => {
        setData(null)
        setError(null)
        // console.log("RUN")
        if (isLoading) {
            axios(baseUrl + url, options).then(function (res) {
                setIsLoading(false)
                setData(res.data);
                // console.log(res.data)
            }).catch((error) => {
                setIsLoading(false)
                console.log(error);
                setError(error.data);
            });
        }
    }, [isLoading])

    // [{states}, functions]
    return [{ data, isLoading, error }, doFetch]
}

export default useFetch;