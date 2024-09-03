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
        const carBrands = [
            {
              "id": 1,
              "title": "Audi",
              "logoFilename": "audi.png"
            },
            {
              "id": 2,
              "title": "BMW",
              "logoFilename": "bmw.png"
            },
            {
              "id": 3,
              "title": "Ford",
              "logoFilename": "ford.png"
            },
            {
              "id": 4,
              "title": "Porsche",
              "logoFilename": "porsche.png"
            },
            {
              "id": 5,
              "title": "Fiat",
              "logoFilename": "fiat.png"
            }
          ]

        // ACT
        const response = await carsController.getCarsBrands()

        // Assert
        expect(response.status(), "Status code should be valid").toBe(200)
        const actualBody = await response.json()
        expect(actualBody.data).toMatchObject(carBrands)
    })
})