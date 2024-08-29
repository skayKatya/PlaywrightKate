import {expect, test} from "../../../src/fixtures/myFixtures.js";
import {CAR_BRANDS} from "../../../src/data/cars.js";
import {CAR_MODELS} from "../../../src/data/carModels.js";
import moment from "moment";
import { faker } from '@faker-js/faker';
import CarsController from "../../../src/controllers/CarsController.js";


test.describe("Testing controllers", ()=>{
    const carBrand = CAR_BRANDS.Audi
    const carModel = CAR_MODELS.AUDI.TT

    let carsIdToDelete

    test.afterEach(async ({carsController})=>{

        if(carsIdToDelete){
            const res = await carsController.deleteCar(carsIdToDelete)
            await expect(res).toBeOK()
        }

        carsIdToDelete = null
    })

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test.only(`Delete existing car with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
                // Arrange
                const requestBody = {
                    "carBrandId": carBrand.id,
                    "carModelId": carModel.id,
                    "mileage": Math.floor(Math.random() * 100)
                }
                // ACT
                const responseCreate = await carsController.createCar(requestBody)
                const createCarResponseBody = await responseCreate.json();
                const responseDelete = await carsController.deleteCar(createCarResponseBody.data.id)
                const deleteCarResponseBody = await responseDelete.json();
    
            // Assert
            expect(responseDelete.status(), "Status code should be valid").toBe(200)
            expect(deleteCarResponseBody).toEqual({
                "status": "ok",
                "data": {
                "carId": createCarResponseBody.data.id
                }
            })
        })
    }
       
})