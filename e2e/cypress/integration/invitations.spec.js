/// <reference types="Cypress" />

context('Invitations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/invitaciones')
  })
  it('create a new invitation', () => {
    const title = 'My new Event';
    const description = 'This is my amazing event, and you are invited';

    cy.get("[name='title']").type(title);
    cy.get("[for=nicolas_02]").click();
    cy.get("[name='text']").type(description);
    cy.get("[type='submit']").click();

    cy.url().should('contain', encodeURIComponent(title));
    cy.url().should('contain', encodeURIComponent(description));
    cy.contains(title);
    cy.contains(description);
  });
});
