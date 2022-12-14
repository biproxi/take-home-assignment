describe('site', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should display the navbar on each page', () => {
    cy.get('a').should('contain', 'Yay-Nay Movie Reviews');
  });

  it('should display the navbar on each page', () => {
    cy.get('a').should('contain', 'Reviews');
  });

  it('should display the navbar on each page', () => {
    cy.get('a').should('contain', 'Contribute');
  });
});
