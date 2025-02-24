import axios from 'axios';

class PostService {


    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/api/posts'
        })
    }
    getPosts() {
        return this.api.get('/')
    }
    createPost(data) {
        return this.api.post('/', data)
    }
    getOnePost(blog_id) {
        return this.api.get(`/show/${blog_id}`)
    }
    editPost(id, data) {
        return this.api.put(`/${id}`, data)
    }
    deletePost(id) {
        return this.api.delete(`/${id}`)
    }
}
const postService = new PostService();

export default postService;