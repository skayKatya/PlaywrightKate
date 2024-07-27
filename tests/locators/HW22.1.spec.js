import {expect, test} from "@playwright/test";

test.describe("Welcome page", () => {
    test.beforeEach("Click on a signup button on the Welcome page", async ({page}) => {
        await page.goto('/');

        const signUpButton = page.locator('.hero-descriptor_btn', {
            hasText: 'Sign up'
        })
        await signUpButton.click()
    })

    test("Verify Register button is disabled", async ({page}) => {
        const signupRegisterButton = page.locator('.modal-footer > .btn')
        await expect(signupRegisterButton).toBeDisabled()

    })

    test("Verify Register button is enabled", async ({page}) => {

        const signupName = page.locator('#signupName')
        await signupName.fill('test')

        const signupLastName = page.locator('#signupLastName')
        await signupLastName.fill('testOne')

        const signupEmail = page.locator('#signupEmail')
        await signupEmail.fill('aqa-test1@gmail.com')

        const signupPassword = page.locator('#signupPassword')
        await signupPassword.fill('123qweQWE!@#')

        const signupRepeatPassword = page.locator('#signupRepeatPassword')
        await signupRepeatPassword.fill('123qweQWE!@#')

        const signupRegisterButton = page.locator('.modal-footer > .btn')
        await expect(signupRegisterButton).toBeEnabled()

    })

    test("User can sign up into Hillel", async ({page}) => {

        const signupName = page.locator('#signupName')
        await signupName.fill('test')

        const signupLastName = page.locator('#signupLastName')
        await signupLastName.fill('testOne')

        const signupEmaiLocator = page.locator('#signupEmail')
        const prefics = 'aqa'
        const domain = '@gmail.com'
        const signupEmail = prefics + Math.floor(Math.random() * 50) + domain
        await signupEmaiLocator.fill(signupEmail) 

        const signupPassword = page.locator('#signupPassword')
        await signupPassword.fill('123qweQWE!@#')

        const signupRepeatPassword = page.locator('#signupRepeatPassword')
        await signupRepeatPassword.fill('123qweQWE!@#')

        const signupRegisterButton = page.locator('.modal-footer > .btn', {
            hasText: 'Register'
        })

        await signupRegisterButton.click()

        const myProfileIcon = page.locator('#userNavDropdown')
        await expect(myProfileIcon).toBeVisible()

    })


        test.describe("Name field validation", () => {
            test("Verify error on empty Name field", async ({page}) => {

                const signupName = page.locator('#signupName')
                const fieldNameError = page.locator('div:nth-of-type(1) > .invalid-feedback > p')

                await signupName.focus()
                await signupName.blur()
                await expect(fieldNameError).toHaveText('Name required')
            })

            test("Verify invalid value on Name field", async ({page}) => {

                const signupName = page.locator('#signupName')
                const fieldNameError = page.locator('div:nth-of-type(1) > .invalid-feedback > p')

                await signupName.fill('123')
                await signupName.blur()
                await expect(fieldNameError).toHaveText('Name is invalid')
            })

            test("Verify that Name field was NOT trimmed", async ({page}) => {

                const signupName = page.locator('#signupName')
                const fieldNameError = page.locator('div:nth-of-type(1) > .invalid-feedback > p')

                await signupName.fill('  Kate  ')
                await signupName.blur()
                await expect(fieldNameError).toHaveText('Name is invalid')
            })

            test("Verify error about wrong lenght on Name field", async ({page}) => {

                const signupName = page.locator('#signupName')
                const fieldNameError = page.locator('div:nth-of-type(1) > .invalid-feedback > p')

                await signupName.fill('f')
                await signupName.blur()
                await expect(fieldNameError).toHaveText('Name has to be from 2 to 20 characters long')
            })

            test("Verify border color is red on Name field", async ({page}) => {

                const signupName = page.locator('#signupName')
                const fieldNameError = page.locator('div:nth-of-type(1) > .invalid-feedback > p')

                await signupName.focus()
                await signupName.blur()
                await expect(fieldNameError).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            })


        })

        test.describe("Last Name field validation", () => {
            test("Verify error on empty Last Name field", async ({page}) => {

                const signupLastName = page.locator('#signupLastName')
                const fieldLastNameError = page.locator('div:nth-of-type(2) > .invalid-feedback > p')

                await signupLastName.focus()
                await signupLastName.blur()
                await expect(fieldLastNameError).toHaveText('Last name required')
            })

            test("Verify error about invalid  data on Last Name field", async ({page}) => {

                const signupLastName = page.locator('#signupLastName')
                const fieldLastNameError = page.locator('div:nth-of-type(2) > .invalid-feedback > p')

                await signupLastName.fill('123')
                await signupLastName.blur()
                await expect(fieldLastNameError).toHaveText('Last name is invalid')
            })

            test("Verify error about wrong lenght on Last Name field", async ({page}) => {

                const signupLastName = page.locator('#signupLastName')
                const fieldLastNameError = page.locator('div:nth-of-type(2) > .invalid-feedback > p')

                await signupLastName.fill('S')
                await signupLastName.blur()
                await expect(fieldLastNameError).toHaveText('Last name has to be from 2 to 20 characters long')
            })

            test("Verify border color is red on Last Name field", async ({page}) => {

                const signupLastName = page.locator('#signupLastName')
                const fieldLastNameError = page.locator('div:nth-of-type(2) > .invalid-feedback > p')

                await signupLastName.focus()
                await signupLastName.blur()
                await expect(fieldLastNameError).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            })
        })

        test.describe("Email field validation", () => {
            test("Verify error on empty Email field", async ({page}) => {

                const signupEmail = page.locator('#signupEmail')
                const fieldEmailError = page.locator('div:nth-of-type(3) > .invalid-feedback > p')

                await signupEmail.focus()
                await signupEmail.blur()
                await expect(fieldEmailError).toHaveText('Email required')
            })

            test("Verify error about wrong data on Email field", async ({page}) => {

                const signupEmail = page.locator('#signupEmail')
                const fieldEmailError = page.locator('div:nth-of-type(3) > .invalid-feedback > p')

                await signupEmail.fill('123')
                await signupEmail.blur()
                await expect(fieldEmailError).toHaveText('Email is incorrect')
            })

            test("Verify border color is red on Email field", async ({page}) => {

                const signupEmail = page.locator('#signupEmail')
                const fieldEmailError = page.locator('div:nth-of-type(3) > .invalid-feedback > p')

                await signupEmail.fill('S')
                await signupEmail.blur()
                await expect(fieldEmailError).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            })

        })

        test.describe("Password field validation", () => {
            test("Verify error on empty Password field", async ({page}) => {

                const signupPassword = page.locator('#signupPassword')
                const fieldPasswordError = page.locator('div:nth-of-type(4) > .invalid-feedback > p')

                await signupPassword.focus()
                await signupPassword.blur()
                await expect(fieldPasswordError).toHaveText('Password required')
            })

            test("Verify error about wrong data on Password field", async ({page}) => {

                const signupPassword = page.locator('#signupPassword')
                const fieldPasswordError = page.locator('div:nth-of-type(4) > .invalid-feedback > p')

                await signupPassword.fill('123')
                await signupPassword.blur()
                await expect(fieldPasswordError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            })

            test("Verify border color is red on Password field", async ({page}) => {

                const signupPassword = page.locator('#signupPassword')
                const fieldPasswordError = page.locator('div:nth-of-type(4) > .invalid-feedback > p')

                await signupPassword.focus()
                await signupPassword.blur()
                await expect(fieldPasswordError).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            })
        })

        test.describe("Re-enter password field validation", () => {
            test("Verify error on empty Re-enter password field", async ({page}) => {

                const signupRepeatPassword = page.locator('#signupRepeatPassword')
                const fieldRepeatedPasswordError = page.locator('div:nth-of-type(5) > .invalid-feedback > p')

                await signupRepeatPassword.focus()
                await signupRepeatPassword.blur()
                await expect(fieldRepeatedPasswordError).toHaveText('Re-enter password required')
            })

            test("Verify error about mismatching passwords on Re-enter password field", async ({page}) => {

                const signupRepeatPassword = page.locator('#signupRepeatPassword')
                const signupPassword = page.locator('#signupPassword')
                const fieldRepeatedPasswordError = page.locator('div:nth-of-type(5) > .invalid-feedback > p')

                await signupPassword.fill('qwe123QWE!@#')
                await signupRepeatPassword.fill('QWE!@#')
                await signupRepeatPassword.blur()
                await expect(fieldRepeatedPasswordError).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            })

            test("Verify border color is red on  Re-enter password field", async ({page}) => {

                const signupRepeatPassword = page.locator('#signupRepeatPassword')
                const fieldRepeatedPasswordError = page.locator('div:nth-of-type(5) > .invalid-feedback > p')

                await signupRepeatPassword.focus()
                await signupRepeatPassword.blur()
                await expect(fieldRepeatedPasswordError).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            })
        })
})
