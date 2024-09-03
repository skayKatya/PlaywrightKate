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

    test(`Gets cars models`, async({carsController})=>{
        const carModels = [
                {
                  "id": 1,
                  "carBrandId": 1,
                  "title": "TT"
                },
                {
                  "id": 2,
                  "carBrandId": 1,
                  "title": "R8"
                },
                {
                  "id": 3,
                  "carBrandId": 1,
                  "title": "Q7"
                },
                {
                  "id": 4,
                  "carBrandId": 1,
                  "title": "A6"
                },
                {
                  "id": 5,
                  "carBrandId": 1,
                  "title": "A8"
                },
                {
                  "id": 6,
                  "carBrandId": 2,
                  "title": "3"
                },
                {
                  "id": 7,
                  "carBrandId": 2,
                  "title": "5"
                },
                {
                  "id": 8,
                  "carBrandId": 2,
                  "title": "X5"
                },
                {
                  "id": 9,
                  "carBrandId": 2,
                  "title": "X6"
                },
                {
                  "id": 10,
                  "carBrandId": 2,
                  "title": "Z3"
                },
                {
                  "id": 11,
                  "carBrandId": 3,
                  "title": "Fiesta"
                },
                {
                  "id": 12,
                  "carBrandId": 3,
                  "title": "Focus"
                },
                {
                  "id": 13,
                  "carBrandId": 3,
                  "title": "Fusion"
                },
                {
                  "id": 14,
                  "carBrandId": 3,
                  "title": "Mondeo"
                },
                {
                  "id": 15,
                  "carBrandId": 3,
                  "title": "Sierra"
                },
                {
                  "id": 16,
                  "carBrandId": 4,
                  "title": "911"
                },
                {
                  "id": 17,
                  "carBrandId": 4,
                  "title": "Cayenne"
                },
                {
                  "id": 18,
                  "carBrandId": 4,
                  "title": "Panamera"
                },
                {
                  "id": 19,
                  "carBrandId": 5,
                  "title": "Palio"
                },
                {
                  "id": 20,
                  "carBrandId": 5,
                  "title": "Ducato"
                },
                {
                  "id": 21,
                  "carBrandId": 5,
                  "title": "Panda"
                },
                {
                  "id": 22,
                  "carBrandId": 5,
                  "title": "Punto"
                },
                {
                  "id": 23,
                  "carBrandId": 5,
                  "title": "Scudo"
                }
              ]
        // ACT
        const response = await carsController.getCarsModels()

        // Assert
        expect(response.status(), "Status code should be valid").toBe(200)
        const actualBody = await response.json()
        expect(actualBody.data).toMatchObject(carModels)
    })

   
})