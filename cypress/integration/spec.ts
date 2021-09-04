describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome');
    cy.contains('modern-angular-boilerplate app is running!');
    cy.contains('New Component').click();
    cy.contains('ng generate component xyz');
  });
});
