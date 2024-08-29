import {test, expect} from "../../src/fixtures/userGaragePage";

test.describe('Garage', () => {
    


    test.beforeEach(async ({ garagePage}) => {
        await garagePage.navigate()
        
    })

    test('Verify that user can add a car', async ({garagePage, page}) => {
       

        const car = {
            brand: "BMW",
            model: "3",
            mileage: "100"
        }


        const addCarPopup = await garagePage.openAddCarPopup()
        await addCarPopup.addCar(car)
        await expect(garagePage.addCarButton).toBeVisible();
        })
})