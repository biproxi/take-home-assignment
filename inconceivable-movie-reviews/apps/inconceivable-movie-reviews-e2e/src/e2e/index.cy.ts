describe('site', () => {
  beforeEach(() => {
    // navigate to an example article
    cy.visit('http://localhost:4200');
  });

  it('should have two cards', () => {
    cy.get('div').should('contain', 'Read Reviews');
  });

  it('should properly render the Youtube component', () => {
    cy.get('div').should('contain', 'Contribute');
  });
});
