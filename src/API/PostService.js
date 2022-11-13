import axios from 'axios'

export class CommentService {
    static async getAll(id) {
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return await response.data
    }
}