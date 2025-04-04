import axios from 'axios';

class PostService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/api/posts'
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getOnePost(blog_id) {
        return this.api.get(`/show/${blog_id}`)
    }
    /* All posts */
    getPosts() {
        return this.api.get('/show')
    }
    /* User posts */
    getUserPosts(id) {
        return this.api.get(`/user/${id}`)
    }
    /* Publicar */
    createPost(data) {
        return this.api.post('/store', data)
    }

    getLastTenPost() {
        return this.api.get('/news')
    }

    /* Editar post */
    editPost(id, data) {
        return this.api.put(`/update/${id}`, data)
    }

    /* Eliminar post no se si vale así */
    deletePost(id) {
        return this.api.delete(`/destroy/${id}`)
    }
}
const postService = new PostService();

export default postService;