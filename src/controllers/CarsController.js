export default class CarsController {
    #CREATE_CAR_PATH = '/api/cars'
    #GET_CARS_PATH = '/api/cars'
    #DELETE_CAR_PATH = (id) => `/api/cars/${id}`
    #GET_CARS_BRANDS_PATH = '/api/cars/brands'
    #GET_CARS_BRANDS_BY_ID_PATH = (id) => `/api/cars/brands/${id}`
    #GET_CARS_MODELS_PATH = '/api/cars/models'
    #GET_CARS_MODELS_BY_ID_PATH = (id) => `/api/cars/models/${id}`
    #GET_CARS_BY_ID_PATH = (id) => `/api/cars/${id}`
    #EDIT_CAR_BY_ID_PATH = (id) => `/api/cars/${id}`

    constructor(request){
        this._request = request
    }

    async getCars(){
        console.log("Get all user's cars")
        return this._request.get(this.#GET_CARS_PATH)
    }

    async createCar(requestBody){
        console.log("Create car with data: ", requestBody)
        return this._request.post(this.#CREATE_CAR_PATH, {
            data: requestBody
        })
    }

    async deleteCar(id){
        console.log(`Delete car by id: ${id}`)
        return this._request.delete(this.#DELETE_CAR_PATH(id))
    }

    async getCarsBrands(){
        console.log("Get all cars brands")
        return this._request.get(this.#GET_CARS_BRANDS_PATH)
    }

    async getCarsBrandByID(id){
        console.log(`Get cars brand by id: ${id}`)
        return this._request.get(this.#GET_CARS_BRANDS_BY_ID_PATH(id))
    }
    async getCarsModels(){
        console.log("Get all cars models")
        return this._request.get(this.#GET_CARS_MODELS_PATH)
    }

    async getCarsModelByID(id){
        console.log(`Get cars models by id: ${id}`)
        return this._request.get(this.#GET_CARS_MODELS_BY_ID_PATH(id))
    }
    async getCarsByID(id){
        console.log(`Gets current user car by id: ${id}`)
        return this._request.get(this.#GET_CARS_BY_ID_PATH(id))
    }

    async editCarByID(id, updatedBody){
        console.log(`Edits existing car by id: ${id}`, updatedBody)
        return this._request.put(this.#EDIT_CAR_BY_ID_PATH(id), {
            data: updatedBody
        })
    }
}