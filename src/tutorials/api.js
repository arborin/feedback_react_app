
const getResource = async (url) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
    }
    const body = await res.json()

    return body
}


getResource("https://swapi.dev/api/films/1378979879/").then((body) => {
    console.log(body)
}).catch((error) => {
    console.log("Could not fetch. ", error)
})


