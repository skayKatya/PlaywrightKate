import SignInPopup from "../pageObjects/welcomePage/components/SignInPopup.js";
import BaseComponent from "./BaseComponent.js";
import SignUpPopup from "../pageObjects/welcomePage/components/SignUpPopup.js";

export default class Header  extends  BaseComponent {
    constructor(page) {
        super(page)
        this.signInBtn = page.locator('.header_signin')
        this.signUpBtn = page.locator('.hero-descriptor_btn', {
            hasText: 'Sign up'})

        // this.elements = {
        //     signInBtn: page.locator('.header_signin')
        // }
    }


    async clickSignInButton(){
        await this.signInBtn.click()
        return new SignInPopup(this._page)
    }

    async clickSignUpButton(){
        await this.signUpBtn.click()
        return new SignUpPopup(this._page)
    }

}