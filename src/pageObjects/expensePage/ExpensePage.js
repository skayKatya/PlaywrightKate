import BasePage from "../BasePage.js";
import AddAnExpensePopup from "./components/AddAnExpensePopup.js";

export default class ExpensePage  extends BasePage {
    constructor(page) {
        super(page, "/panel/expenses", page.getByRole('button', { name: 'Add an expense' }))
        this.addAnExpenseButton = page.getByRole('button', { name: 'Add an expense' })
    }

    async openAddAnExpensePopup () {
        await this.addAnExpenseButton.click()
        return new AddAnExpensePopup(this._page)
    }
}

