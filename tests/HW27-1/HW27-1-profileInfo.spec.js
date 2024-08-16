import {test, expect} from "../../src/fixtures/profilePage.js";


test.describe.only('Profile request data', () => {
    
    test.beforeEach(async ({profilePage}) => {
        await profilePage.navigate()
        
    })

    test('Changed profile info', async ({page}) => {
        const mockedProfileinfo = {
            "status": "ok",
            "data": {
                "userId": 133276,
                "photoFilename": "default-user.png",
                "name": "test",
                "lastName": "Nework"
            }
        }

        await page.route("/api/users/profile", async route =>{
        await route.fulfill({
                  status: 200,
                  json: mockedProfileinfo
                })
            })

            await page.reload()
            await page.pause()

    })
})