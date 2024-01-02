import { useEffect, useState } from "react";

const useLocalStorage = (key, value = '') => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || value
    })

    useEffect(() => {
        localStorage.setValue(key, value)
    }, [value])

    return [value, setValue]

}

export default useLocalStorage;