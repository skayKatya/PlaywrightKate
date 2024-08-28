import {test, expect} from "../../../src/fixtures/fuelExpensePage.js";
import {CAR_BRANDS} from "../../../src/data/cars.js";
import {CAR_MODELS} from "../../../src/data/carModels.js";


test.describe("Add expenses", ()=>{
    const carBrand = CAR_BRANDS.Audi
   
    test.beforeEach(async ({request})=>{
        const carsList = await request.get('/api/cars')
        const {data: cars} = await carsList.json()

        await Promise.all(
            cars.map((car)=>(async ()=>{
                    const res = await request.delete(`/api/cars/${car.id}`)
                    await expect(res).toBeOK()
            })())
        )
    })
 
    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({request})=>{
            let createdCar;
        await test.step("Create car", async() =>{

                const requestBody = {
                    "carBrandId": carBrand.id,
                    "carModelId": carModel.id,
                    "mileage": Math.floor(Math.random() * 100)
                }
               
                const response = await request.post('/api/cars', {
                    data: requestBody
                })
            
                expect(response.status(), "Status code should be valid").toBe(201)
                const body = await response.json()
                createdCar = body.data
            
        })
    
        await test.step('Add expenses to the car', async () => {
       
        const mileage = createdCar.initialMileage + Math.floor(Math.random() * 100)

        const requestBody = {
            "carId": createdCar.id,
            "liters": Math.floor(Math.random() * 100),
            "mileage": mileage,
            "reportedAt": new Date().toISOString(),
            "totalCost": Math.floor(Math.random() * 100)
            
        }
  
        const response = await request.post('/api/expenses', {
            data: requestBody
        })


        expect(response.status(), "Status code should be valid").toBe(200)
        const actualBody = await response.json()
        expect(actualBody).toEqual({
            "status": "ok",
            "data": {
            "carId": expect.any(Number),
            "reportedAt": expect.any(String),
            "liters": expect.any(Number),
            "id": expect.any(Number),
            "mileage": expect.any(Number),
            "totalCost": expect.any(Number)
            }
        })
        })
    })
}
    })


