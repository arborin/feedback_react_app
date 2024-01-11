
class ApiService {
    _apiBase = "https://jsonplaceholder.org"

    async getResource(url) {
        const apiUrl = `${this._apiBase}${url}`
        console.log(apiUrl)

        const res = await fetch(apiUrl)

        if (!res.ok) {
            throw new Error(`Could not fetch ${apiUrl}, recieved ${res.status}`)
        }
        const body = await res.json()

        return body
    }

    getPosts() {
        return this.getResource(`/posts`)
    }

    getPost(id) {
        return this.getResource(`/posts/${id}`)
    }
}

export default ApiService
