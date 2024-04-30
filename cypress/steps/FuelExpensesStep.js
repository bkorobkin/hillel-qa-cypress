import 'cypress-xpath';
import { basePage } from '../pages/BasePage';
import { generalStep } from '../steps/GeneralStep';


export default class FuelExpensesStep {

fillExpenseForm() {
    basePage.selectExistVehicle();
    basePage.selectExpenseDate();
    basePage.selectExpenseMileage();
    basePage.selectExpenseLiters();
    basePage.selectExpenseTotalCost();
    basePage.confirmAddAnExpenseForm();
    basePage.addFuelExpenseSuccessCheck();
  }
}