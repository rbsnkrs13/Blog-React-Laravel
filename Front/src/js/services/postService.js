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
    getOnePost(id) {
        return this.api.get(`/${id}`)
    }
    editPost(id, data) {
        return this.api.put(`/${id}`, data)
    }
    deletePost(id) {
        return this.api.delete(`/${id}`)
    }
}
export default PostService;