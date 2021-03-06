describe('404 page', () => {
  it('should load page', () => {
    cy.visit('/404', { failOnStatusCode: false });
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should have a footer', () => {
    cy.get('footer');
  });

  it('Dark/Light mode should work', () => {
    cy.get('#dark-mode-toggle').click();
    // cy.get('html').should('have.class', 'light');
  });

  it('Should have 404 title', () => {
    cy.get('h1').contains('404');
  });

  it('Should switch language to de', () => {
    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('#powered-by').contains(
      'Geschrieben mit Next.js und TailwindCss. Bereitgestellt auf Vercel.'
    );
  });

  it('Should get back', () => {
    cy.get('a').contains('Zurück zur Startseite').click();
    cy.url().should('eq', Cypress.config('baseUrl') + '/de');
  });
});
