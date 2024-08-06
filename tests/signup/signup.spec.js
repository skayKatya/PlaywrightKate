import {expect, test} from "@playwright/test";
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";

test.describe.only("Sign UP into Hillel", ()=>{
    let signUpPopup

    test.beforeEach(async ({page})=>{
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        signUpPopup = await welcomePage.header.clickSignUpButton()
    })

    test("Verify Register button is disabled", async ({page}) => {
        await expect(signUpPopup.signupRegisterButton).toBeDisabled()
    })

    test("Verify Register button is enabled", async ({page}) => {
        await signUpPopup.fill({
            name: 'First',
            lastName: 'Test',
            email: 'aqa-firstTest@gmail.com',
            password: '123QWE!@#qwe',
            reEnterPassword: '123QWE!@#qwe'
        })
        await expect(signUpPopup.signupRegisterButton).toBeEnabled()
    })

    test("User can sign up into Hillel", async ({page}) => {
        const prefics = 'aqa'
        const domain = '@gmail.com'
        const randomEmail = prefics + Math.floor(Math.random() * 100) + domain
        await signUpPopup.signup({
            name: 'First',
            lastName: 'Test',
            email: randomEmail,
            password: '123QWE!@#qwe',
            reEnterPassword: '123QWE!@#qwe'
            
        })

        const myProfileIcon = page.locator('#userNavDropdown')
        await expect(myProfileIcon).toBeVisible()

    })

    test("Verify error on empty Name field", async ({page}) => {

            await signUpPopup.signupName.focus()
            await signUpPopup.signupName.blur()
            await expect(signUpPopup.signupNameValidationMessage).toHaveText('Name required')
    })

    test("Verify invalid value on Name field", async ({page}) => {

            await signUpPopup.fill({
                name: '123',
                lastName: 'TEST'
            })
            await expect(signUpPopup.signupNameValidationMessage).toHaveText('Name is invalid')
    })

    test("Verify that Name field was NOT trimmed", async ({page}) => {

            await signUpPopup.fill({
                name: ' Kate ',
                lastName: 'TEST'
            })
            await expect(signUpPopup.signupNameValidationMessage).toHaveText('Name is invalid')
    })

    test("Verify error about wrong lenght on Name field", async ({page}) => {

            await signUpPopup.fill({
                name: 'f',
                lastName: 'TEST'
            })
            await expect(signUpPopup.signupNameValidationMessage).toHaveText('Name has to be from 2 to 20 characters long')
    })

    test("Verify border color is red on Name field", async ({page}) => {

            await signUpPopup.signupName.focus()
            await signUpPopup.signupName.blur()
            await expect(signUpPopup.signupNameValidationMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

    test("Verify error on empty Last Name field", async ({page}) => {

        await signUpPopup.signupLastName.focus()
        await signUpPopup.signupLastName.blur()
        await expect(signUpPopup.signupLastNameValidationMessage).toHaveText('Last name required')
    })

    test("Verify error about invalid  data on Last Name field", async ({page}) => {

        await signUpPopup.fill({
            lastName: '123',
            email: 'aqa-firstTest@gmail.com'
        })
        await expect(signUpPopup.signupLastNameValidationMessage).toHaveText('Last name is invalid')
    })

    test("Verify error about wrong lenght on Last Name field", async ({page}) => {

        await signUpPopup.fill({
            lastName: 'g',
            email: 'aqa-firstTest@gmail.com'
        })
        await expect(signUpPopup.signupLastNameValidationMessage).toHaveText('Last name has to be from 2 to 20 characters long')
    })

    test("Verify border color is red on Last Name field", async ({page}) => {

        await signUpPopup.signupLastName.focus()
        await signUpPopup.signupLastName.blur()
        await expect(signUpPopup.signupLastNameValidationMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

    test("Verify error on empty Email field", async ({page}) => {

        await signUpPopup.signupEmail.focus()
        await signUpPopup.signupEmail.blur()
        await expect(signUpPopup.signupEmailValidationMessage).toHaveText('Email required')
    })

    test("Verify error about wrong data on Email field", async ({page}) => {

        await signUpPopup.fill({
            email: 'fsg44fdbd##',
            password: '123QWE!@#qwe'
        })
        await expect(signUpPopup.signupEmailValidationMessage).toHaveText('Email is incorrect')
    })

    test("Verify border color is red on Email field", async ({page}) => {

        await signUpPopup.signupEmail.focus()
        await signUpPopup.signupEmail.blur()
        await expect(signUpPopup.signupEmailValidationMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

    test("Verify error on empty Password field", async ({page}) => {

        await signUpPopup.signupPassword.focus()
        await signUpPopup.signupPassword.blur()
        await expect(signUpPopup.signupPasswordValidationMessage).toHaveText('Password required')
    })

    test("Verify error about wrong data on Password field", async ({page}) => {

        await signUpPopup.fill({
            password: 'jbkjb',
            reEnterPassword: '123QWE!@#qwe'
        })
        await expect(signUpPopup.signupPasswordValidationMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    })

    test("Verify border color is red on Password field", async ({page}) => {

        await signUpPopup.signupPassword.focus()
        await signUpPopup.signupPassword.blur()
        await expect(signUpPopup.signupPasswordValidationMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

    test("Verify error on empty Re-enter password field", async ({page}) => {

        await signUpPopup.signupRepeatPassword.focus()
        await signUpPopup.signupRepeatPassword.blur()
        await expect(signUpPopup.signupRepeatPasswordValidationMessage).toHaveText('Re-enter password required')
    })

    test.only("Verify error about mismatching passwords on Re-enter password field", async ({page}) => {

        await signUpPopup.fill({
            password: '123QWE!@#qwe',
            reEnterPassword: '123QWE!@#qw8'
        })
        await signUpPopup.signupEmail.focus()
        await expect(signUpPopup.signupRepeatPasswordValidationMessage).toHaveText('Passwords do not match')
    })

    test("Verify border color is red on  Re-enter password field", async ({page}) => {

        await signUpPopup.signupRepeatPassword.focus()
        await signUpPopup.signupRepeatPassword.blur()
        await expect(signUpPopup.signupRepeatPasswordValidationMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

})

