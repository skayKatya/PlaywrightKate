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
        test(`Gets car model by ID brand Audi and model ${carModel.title}`, async({carsController})=>{
            // ACT
            const response = await carsController.getCarsModelByID(carModel.id)
    
            // Assert
            expect(response.status(), "Status code should be valid").toBe(200)
        })
    }    
})