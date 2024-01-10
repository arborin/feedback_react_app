
const getResource = async (url) => {
    const res = await fetch(url)

    const body = await res.json()

    return body
}


getResource("https://swapi.dev/api/films/1/").then((body) => {
    console.log(body)
})


