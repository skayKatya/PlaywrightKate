import BaseComponent from "../../../components/BaseComponent.js";

export default class AddCarPopup extends BaseComponent {
    constructor(page) {
        super(page,  page.locator('.modal-content'))
        this.vehicle =  this.container.locator('#addExpenseCar')
        this.reportDate =  this.container.locator('#addExpenseDate')
        this.mileageInput =  this.container.locator('#addExpenseMileage')
        this.numberOfLitersInput =  this.container.locator('#addExpenseLiters')
        this.totalCost =  this.container.locator('#addExpenseTotalCost')
        this.addExpenseBtn =  this.container.locator('.btn-primary')
    }

   async addExpense({vehicle, reportDate, mileage, numberOfLiters, totalCost}) {
       await  this.vehicle.selectOption({label: vehicle})
       await  this.reportDate.selectOption({label: reportDate})
       await  this.mileageInput.fill(mileage)
       await  this.numberOfLitersInput.fill(numberOfLiters)
       await  this.totalCost.fill(totalCost)
       await  this.addExpenseBtn.click()
   }

}