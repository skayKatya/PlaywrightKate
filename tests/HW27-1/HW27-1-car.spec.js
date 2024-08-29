// import {test, expect} from "../../src/fixtures/userGaragePage.js";

// test.describe('Creating cars', () => {

//     test.afterEach(async ({request})=>{
//         const carsList = await request.get('/api/cars')
//         const {data: cars} = await carsList.json()

//         await Promise.all(
//             cars.map((car)=>(async ()=>{
//                     const res = await request.delete(`/api/cars/${car.id}`)
//                     await expect(res).toBeOK()
//             })())
//         )

//         // for (const car of cars) {
//         //     const res = await request.delete(`/api/cars/${car.id}`)
//         //     await expect(res).toBeOK()
//         // }
//     })

//     test('Verify that user can add a car', async ({request}) => {
//         const requestBody = {
//             "carBrandId": 1,
//             "carModelId": 1,
//             "mileage": 122
//         }

//         const response = await request.post('/api/cars', {
//             data: requestBody
//         })
       
//         const body = await response.json()
//         expect(body.data, "Car should be created").toMatchObject(requestBody)
//     })

//     test.skip('Verify that user can NOT add a car WITHOUT body', async ({request}) => {
//         const requestBody = null

//         const response = await request.post('/api/cars', {
//             data: requestBody
//         })
       
//         const body = await response.json()
//         expect(body.data, "Car should NOT be created").toBeUndefined()
//     })

//     test('Verify that user can NOT add a car WITHOUT brandId', async ({request}) => {
//         const requestBody = {
//             "carModelId": 1,
//             "mileage": 122
//         }

//         const errorMissingBrandId = {
//             "status": "error",
//             "message": "Car brand id is required"
//           }

//         const response = await request.post('/api/cars', {
//             data: requestBody
//         })
       
//         const body = await response.json()
//         expect(body, "Car should be created").toMatchObject(errorMissingBrandId)
//     })

//     test.skip('Verify that user can NOT add a car WITHOUT carModelId', async ({request}) => {
//         const requestBody = {
//             "carBrandId": 1,
//             "mileage": 122
//         }

//         const errorMissingModelId = {
//             "status": "error",
//             "message": "Car model id is required"
//           }

//         const response = await request.post('/api/cars', {
//             data: requestBody
//         })
       
//         const body = await response.json()
//         expect(body, "Car should be created").toMatchObject(errorMissingModelId)
//     })

//     test('Verify that user can NOT add a car WITHOUT mileage', async ({request}) => {
//         const requestBody = {
//             "carBrandId": 1,
//             "carModelId": 1
//         }

//         const errorMissingmileage = {
//             "status": "error",
//             "message": "Mileage is required"
//           }
//         const response = await request.post('/api/cars', {
//             data: requestBody
//         })
       
//         const body = await response.json()
//         expect(body, "Car should be created").toMatchObject(errorMissingmileage)
//     })


// })