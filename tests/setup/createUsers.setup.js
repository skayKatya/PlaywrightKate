// import {test as setup} from '@playwright/test'

// setup("Create user", async ({page}) => {
//     await page.goto('/');

//     const signUpButton = page.locator('.hero-descriptor_btn', {
//         hasText: 'Sign up'
//     })
//     await signUpButton.click()

//     const signupName = page.locator('#signupName')
//     await signupName.fill('test')

//     const signupLastName = page.locator('#signupLastName')
//     await signupLastName.fill('testOne')

//     const signupEmaiLocator = page.locator('#signupEmail')
//     const prefics = 'aqa'
//     const domain = '@gmail.com'
//     const signupEmail = prefics + Math.floor(Math.random() * 100) + domain
//     await signupEmaiLocator.fill(signupEmail) 

//     const signupPassword = page.locator('#signupPassword')
//     await signupPassword.fill('123qweQWE!@#')

//     const signupRepeatPassword = page.locator('#signupRepeatPassword')
//     await signupRepeatPassword.fill('123qweQWE!@#')

//     const signupRegisterButton = page.locator('.modal-footer > .btn', {
//         hasText: 'Register'
//     })

//     await signupRegisterButton.click()

//     const myProfileIcon = page.locator('#userNavDropdown')
//     await expect(myProfileIcon).toBeVisible()

// })
