import { useEffect, useState } from "react";

const useLocalStorage = (key, initValue = '') => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initValue
    })

    useEffect(() => {
        localStorage.setItem(key, initValue)
    }, [value, initValue, key])

    return [value, setValue]

}

export default useLocalStorage;