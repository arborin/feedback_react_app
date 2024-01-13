import React from "react";
import ApiService from "../../services/api-services";
import Spinner from "../spinner";
class Posts extends React.Component {



    state = {
        name: null,
        posts: null,
        loading: true
    }

    apiService = new ApiService();


    getPostList() {
        this.apiService.getPosts().then((posts) => {
            this.setState({ posts: posts, loading: false })
        })
    }

    constructor() {
        super()
        this.getPostList()
    }

    render() {


        const { posts, name, loading } = this.state;
        console.log(posts)
        return (
            <>
                <PostList name={name} posts={posts} loading={loading} />
            </>
        )
    }
}

const PostList = ({ name, loading, posts }) => {
    return (
        <>
            <h4>{name}</h4>
            {loading && <Spinner />}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {posts && posts.map((post, inx) => {
                        return (
                            <tr key={inx} className="table-active">
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td>{post.category}</td>
                                <td><button className="btn btn-primary btn-sm">show</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Posts