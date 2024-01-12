import React from "react";
import ApiService from "../../services/api-services";
class Posts extends React.Component {



    state = {
        name: null,
        posts: null,
    }

    apiService = new ApiService();


    getPostList() {
        this.apiService.getPosts().then((posts) => {
            this.setState({ posts: posts })
        })
    }

    constructor() {
        super()
        this.getPostList()
    }

    render() {


        const { posts, name } = this.state;
        console.log(posts)
        return (
            <>
                <h4>{name}</h4>
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
}

export default Posts