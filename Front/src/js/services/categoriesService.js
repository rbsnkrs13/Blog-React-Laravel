import axios from 'axios';

class ServicioCategorias {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/api/categories'
        })




    }
    getCategorias() {
        return (
            [
                { id: 1, title: 'Tecnologia', description: "", img_url: '../../../../assets/carouselVertical/Tecnologia.webp' },
                { id: 2, title: 'Salud', description: "", img_url: '../../../../assets/carouselVertical/salud.webp' },
                { id: 3, title: 'Ciencia', description: "", img_url: '../../../../assets/carouselVertical/Ciencia.webp' },
                { id: 4, title: 'Viajes', description: "", img_url: '../../../../assets/carouselVertical/Viajes.webp' },
                { id: 5, title: 'Cultura', description: "", img_url: '../../../../assets/carouselVertical/Cultura.webp' },
                { id: 6, title: 'Deportes', description: "", img_url: '../../../../assets/carouselVertical/Deportes.webp' },
                { id: 7, title: 'Entretenimiento', description: "", img_url: '../../../../assets/carouselVertical/Entretenimiento.webp' },
                { id: 8, title: 'Recetas', description: "", img_url: '../../../../assets/carouselVertical/Recetas.webp' },
                { id: 9, title: 'Estetica', description: "", img_url: '../../../../assets/carouselVertical/Estetica.webp' },
                { id: 10, title: 'Economia', description: "", img_url: '../../../../assets/carouselVertical/economia.webp' }
            ]
        )
    }

    // return this.api.get('/')


    getOneCategoria(id) {
        return this.api.get(`/${id}`)
    }

    createCategoria(data) {
        return this.api.post('/', data)
    }
    editCategoria(id, data) {
        return this.api.put(`/${id}`, data)
    }

    deleteCategoria(id) {
        return this.api.delete(`/${id}`)
    }

}
const servicioCategorias = new ServicioCategorias();

export default servicioCategorias;
