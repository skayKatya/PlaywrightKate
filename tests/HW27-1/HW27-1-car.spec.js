import {test, expect} from "../../src/fixtures/userGaragePage.js";

test.describe('Creating cars', () => {

    test('Verify that user can add a car', async ({request}) => {
        const requestBody = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
        }

        const response = await request.post('/api/cars', {
            data: requestBody
        })
       
        const body = await response.json()
        expect(body.data, "Car should be created").toMatchObject(requestBody)
    })

})