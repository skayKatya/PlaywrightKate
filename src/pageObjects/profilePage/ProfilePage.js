import BasePage from "../BasePage.js";
import EditProfilePopup from "./components/EditProfilePopup.js";

export default class GaragePage  extends BasePage {
    constructor(page) {
        super(page, "/panel/profile", page.getByRole('button', { name: 'Edit profile' }))
        this.editProfileButton = page.getByRole('button', { name: 'Edit profile' })
    }

    async editProfilePopup () {
        await this.editProfileButton.click()
        return new EditProfilePopup(this._page)
    }
}

