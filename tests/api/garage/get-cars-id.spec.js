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
        test(`Get cars by ID with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            
            const response = await carsController.createCar(requestBody)
            const createResponseBody = await response.json();
            const responseBody = await carsController.getCarsByID(createResponseBody.data.id)
            carsIdToDelete = createResponseBody.data.id
        // Assert
        expect(responseBody.status(), "Status code should be valid").toBe(200)
        const actualBody = await response.json()
        expect(actualBody.data.id).toEqual(createResponseBody.data.id)
        expect(actualBody.data).toEqual(
            {
                "status": "ok",
                "data": {
                    "id": createResponseBody.data.id,
                    "carBrandId": requestBody.carBrandId,
                    "carModelId": requestBody.carModelId,
                    "initialMileage": requestBody.mileage,
                    "updatedMileageAt": createResponseBody.data.updatedMileageAt,
                    "carCreatedAt": createResponseBody.data.carCreatedAt,
                    "mileage": requestBody.mileage,
                    "brand": carBrand.title,
                    "model": carModel.title,
                    "logo": carBrand.logoFilename
                }
              }
        )
        })
    }
 
})