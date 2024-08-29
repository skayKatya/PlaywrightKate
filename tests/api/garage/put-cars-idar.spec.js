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
        test(`Edit car by ID with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }

            const updatedBody ={
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": faker.number.int({min: 100, max: 200})
            }
            // ACT
            
            const response = await carsController.createCar(requestBody)
            const actualBody = await response.json();
            const responseBody = await carsController.editCarByID(actualBody.data.id, updatedBody)
            carsIdToDelete = actualBody.data.id
        // Assert
        expect(responseBody.status(), "Status code should be valid").toBe(200)
        })
    }
       
})