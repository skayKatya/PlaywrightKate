import BaseComponent from "../../../components/BaseComponent.js";

export default class EditProfilePopup extends BaseComponent {
    constructor(page) {
        super(page,  page.locator('.modal-content'))
        this.nameInput =  this.container.locator('#editProfileName')
        this.lastNameInput =  this.container.locator('#editProfileLastName')
        this.countryInput =  this.container.locator('#editProfileCountry')
        this.birthday =  this.container.locator('#editProfileDateBirth')
        this.photo =  this.container.locator('#editProfilePhoto')
    }
}