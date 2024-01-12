
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

    async getPosts() {
        const posts = await this.getResource(`/posts`)
        return posts.map(this._transformPostData)
    }

    async getPost(id) {
        return await this._transformPostData(this.getResource(`/posts/${id}`))
    }

    _transformPostData(post) {
        return {
            id: post.id,
            title: post.title,
            category: post.category
        }
    }
}

export default ApiService
