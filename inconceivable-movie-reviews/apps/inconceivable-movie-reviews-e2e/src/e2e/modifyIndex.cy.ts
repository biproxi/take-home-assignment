describe('site', () => {
  beforeEach(() => {
    // navigate to an example article
    cy.visit('http://localhost:4200/modify');
  });

  it('should contain a search input', () => {
    cy.get('input')
  });

  it('should contain a form with a title label', () => {
    cy.get('label').should('contain', 'Title:');
  });
});
