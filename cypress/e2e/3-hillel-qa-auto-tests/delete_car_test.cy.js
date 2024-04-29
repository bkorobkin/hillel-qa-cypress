//Garage - delete car test
import 'cypress-xpath';
import {generalStep} from '../../steps/GeneralStep';
import {basePage} from '../../pages/BasePage';

describe('Garage - delete car test', () => {  
    before(() => {
      signInWithStaticData(); 
      cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/garage');
    });

    it('Should add and remove car in the garage', () => {
      generalStep.deleteCar();
      basePage.removedCarSuccessCheck(); 
    });
  });



  