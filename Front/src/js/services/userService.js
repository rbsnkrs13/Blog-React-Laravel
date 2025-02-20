import axios from 'axios';

class userService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/api/users'
        })
    }
    getUsers() {
        return this.api.get('/')
    }
    createUser(data) {
        return this.api.post('/', data)
    }
    getOneUser(id) {
        return this.api.get(`/${id}`)
    }
    editUser(id, data) {
        return this.api.put(`/${id}`, data)
    }
    deleteUser(id) {
        return this.api.delete(`/${id}`)
    }
}

export default userService;