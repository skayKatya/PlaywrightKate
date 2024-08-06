import BaseComponent from "../../../components/BaseComponent.js";

export default class SignUpPopup extends BaseComponent {
    constructor(page) {
        super(page,  page.locator('app-signup-modal'))
        this.signupName =  this.container.locator('#signupName')
        this.signupNameValidationMessage =  this.signupName.locator(' + .invalid-feedback')
        this.signupLastName =  this.container.locator('#signupLastName')
        this.signupLastNameValidationMessage =  this.signupLastName.locator(' + .invalid-feedback')
        this.signupEmail =  this.container.locator('#signupEmail')
        this.signupEmailValidationMessage =  this.signupEmail.locator(' + .invalid-feedback')
        this.signupPassword =  this.container.locator('#signupPassword')
        this.signupPasswordValidationMessage =  this.signupPassword.locator(' + .invalid-feedback')
        this.signupRepeatPassword =  this.container.locator('#signupRepeatPassword')
        this.signupRepeatPasswordValidationMessage =  this.signupRepeatPassword.locator(' + .invalid-feedback')
        this.signupRegisterButton =  this.container.locator('.btn-primary')
        
    }

   async fill ({name, lastName, email, password, reEnterPassword}) {
        name && await this.signupName.fill(name)
        lastName && await this.signupLastName.fill(lastName)
        email && await this.signupEmail.fill(email)
        password && await this.signupPassword.fill(password)
        reEnterPassword && await this.signupRepeatPassword.fill(reEnterPassword)
   }

   async signup ({name, lastName, email, password, reEnterPassword}){
        await this.fill ({name, lastName, email, password, reEnterPassword})
        await this.signupRegisterButton.click()
   }
}