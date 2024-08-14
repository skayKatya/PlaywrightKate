import {test, expect} from "../../src/fixtures/userGaragePage.js";
import AddCarPopup from "../../src/pageObjects/garagePage/components/addCarPopup.js";

test.describe('Garage', () => {
    


    test.beforeEach(async ({ garagePage}) => {
        await garagePage.navigate()
        
    })
 

    test('should be able to open the garage', async ({garagePage}) => {
          await expect(garagePage.addCarButton).toBeVisible();
      });

    test('Verify that Add car Button is clickable', async ({garagePage}) => {
        await expect(garagePage.addCarButton).toBeEnabled();
    });

    test.only('Verify that user can add a car', async ({garagePage, page}) => {
       

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