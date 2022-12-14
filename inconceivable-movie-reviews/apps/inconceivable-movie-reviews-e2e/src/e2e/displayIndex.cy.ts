describe('site', () => {
  beforeEach(() => {
    // navigate to an example article
    cy.visit('/display');
  });

  it('should render the title of the movie', () => {
    cy.get('h2').should('contain', 'The Secret Life of Walter Mitty');
  });
});
