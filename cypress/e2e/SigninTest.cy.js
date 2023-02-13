let email1 = "roni_cost@example.com";
let pass1 = "roni_cost3@example.com";
let w_email = "asdasdasdasd";
let emailErrorMessage = "Please enter a valid email address (Ex: johndoe@domain.com).";
let w_pass = "  ";
let passwordErrorMesage = "This is a required field.";
let b_email = "  ";
let requiredFieldMessage = "This is a required field."
describe('Signin Tests', () => {
    it('CAPTCHA  signin test', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains('Sign In').click();
      cy.get('#email').type(email1);
      cy.get('#pass').type(pass1);
      cy.get('#send2').click();
      cy.contains("Incorrect CAPTCHA").should("be.visible");
      
  
    });
    it('Wrong e-mail adress', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains('Sign In').click();
      cy.get('#email').type(w_email);
      cy.get('#pass').type(pass1);
      cy.get('#send2').click();
      cy.get("#email-error").invoke("text").should("eq", emailErrorMessage);

});
it('Blank password', () => {
  cy.visit('https://magento.softwaretestingboard.com/');
  cy.contains('Sign In').click();
  cy.get('#email').type(email1);
  cy.get('#pass').type(w_pass);
  cy.get('#send2').click();
  cy.get("#pass-error", {timeout: 9000}).invoke("text").should("eq". passwordErrorMesage);
});
it('Blank email', () => {
  cy.visit('https://magento.softwaretestingboard.com/');
  cy.contains('Sign In').click();
  cy.get('#pass').type(pass1);
  cy.get('#send2').click();
  cy.get("#email-error").invoke("text").should("eq". requiredFieldMessage);
});

});