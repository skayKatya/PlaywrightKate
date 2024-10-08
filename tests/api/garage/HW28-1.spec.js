import {test, expect} from "../../../src/fixtures/userGaragePage.js";
import {CAR_BRANDS} from "../../../src/data/cars.js";
import {CAR_MODELS} from "../../../src/data/carModels.js";


test.describe("Create car AUDI", ()=>{
    const carBrand = CAR_BRANDS.Audi

    for (const carModel of Object.values(CAR_MODELS.AUDI)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({request})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            const response = await request.post('/api/cars', {
                data: requestBody
            })

            // Assert
            expect(response.status(), "Status code should be valid").toBe(201)
            const actualBody = await response.json()
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
})

test.describe("Create car BMW", ()=>{
    const carBrand = CAR_BRANDS.BMW

    for (const carModel of Object.values(CAR_MODELS.BMW)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({request})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            const response = await request.post('/api/cars', {
                data: requestBody
            })

            // Assert
            expect(response.status(), "Status code should be valid").toBe(201)
            const actualBody = await response.json()
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
})

test.describe("Create car Ford", ()=>{
    const carBrand = CAR_BRANDS.Ford

    for (const carModel of Object.values(CAR_MODELS.FORD)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({request})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            const response = await request.post('/api/cars', {
                data: requestBody
            })

            // Assert
            expect(response.status(), "Status code should be valid").toBe(201)
            const actualBody = await response.json()
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
})

test.describe("Create car Porsche", ()=>{
    const carBrand = CAR_BRANDS.Porsche

    for (const carModel of Object.values(CAR_MODELS.PORSCHE)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({request})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            const response = await request.post('/api/cars', {
                data: requestBody
            })

            // Assert
            expect(response.status(), "Status code should be valid").toBe(201)
            const actualBody = await response.json()
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
})

test.describe("Create car Fiat", ()=>{
    const carBrand = CAR_BRANDS.Fiat

    for (const carModel of Object.values(CAR_MODELS.FIAT)) {
        test(`Create car with brand ${carBrand.title} and model ${carModel.title}`, async({request})=>{
            // Arrange
            const requestBody = {
                "carBrandId": carBrand.id,
                "carModelId": carModel.id,
                "mileage": Math.floor(Math.random() * 100)
            }
            // ACT
            const response = await request.post('/api/cars', {
                data: requestBody
            })

            // Assert
            expect(response.status(), "Status code should be valid").toBe(201)
            const actualBody = await response.json()
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
})

