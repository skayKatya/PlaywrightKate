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

    test(`Gets car brands`, async({carsController})=>{
        // ACT
        const response = await carsController.getCarsBrands()

        // Assert
        expect(response.status(), "Status code should be valid").toBe(200)
    })

    for (const carBrand of Object.values(CAR_BRANDS)) {
        test(`Gets car brand by ID with brand ${carBrand.title}`, async({carsController})=>{
            // ACT
            const response = await carsController.getCarsBrandByID(carBrand.id)
    
            // Assert
            expect(response.status(), "Status code should be valid").toBe(200)
        })
    }

    test(`Gets cars models`, async({carsController})=>{
        // ACT
        const response = await carsController.getCarsModels()

        // Assert
        expect(response.status(), "Status code should be valid").toBe(200)
    })

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test(`Gets car model by ID brand Audi and model ${carModel.title}`, async({carsController})=>{
            // ACT
            const response = await carsController.getCarsModelByID(carModel.id)
    
            // Assert
            expect(response.status(), "Status code should be valid").toBe(200)
        })
    }

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
         test(`Gets current user cars with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            await carsController.createCar(requestBody)
            const responseBody = await carsController.getCars()
            const actualBody = await response.json();
            carsIdToDelete = actualBody.data.id

        // Assert
        expect(responseBody.status(), "Status code should be valid").toBe(200)
        })
    }

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": faker.number.int({min: 1, max: 100})
            }
            // ACT
            const response = await carsController.createCar(requestBody)

            // Assert
            expect(response.status(), "Status code should be valid").toBe(201)
            const actualBody = await response.json()
            carsIdToDelete = actualBody.data.id
            expect(actualBody).toEqual({
                "status": "ok",
                "data": {
                    "id": expect.any(Number),
                    "carBrandId": requestBody.carBrandId,
                    "carModelId": requestBody.carModelId,
                    "initialMileage": requestBody.mileage,
                    "updatedMileageAt": expect.any(String),
                    "carCreatedAt": expect.any(String),
                    "mileage": requestBody.mileage,
                    "brand": carBrand.title,
                    "model": carModel.title,
                    "logo": carBrand.logoFilename
                }
            })
        })
    }

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
            const actualBody = await response.json();
            const responseBody = await carsController.getCarsByID(actualBody.data.id)
            carsIdToDelete = actualBody.data.id
        // Assert
        expect(responseBody.status(), "Status code should be valid").toBe(200)
        })
    }

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test(`Delete existing car with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
                // Arrange
                const requestBody = {
                    "carBrandId": carBrand.id,
                    "carModelId": carModel.id,
                    "mileage": Math.floor(Math.random() * 100)
                }
                // ACT
                const response = await carsController.createCar(requestBody)
                const actualBody = await response.json();
                const responseBody = await carsController.deleteCar(actualBody.data.id)
    
            // Assert
            expect(responseBody.status(), "Status code should be valid").toBe(200)
        })
    }

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test.only(`Edit car by ID with brand ${carBrand.title} and model ${carModel.title}`, async({carsController})=>{
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