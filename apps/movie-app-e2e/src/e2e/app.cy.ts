describe('movie-app movie page', () => {
  it('load The Shawshank Redemption movie page', () => {
    cy.visit('http://localhost:4200/movie/278');
    cy.get('h1').should('contain', 'The Shawshank Redemption');
  });

  it('load the review form', () => {
    cy.get('form').should('be.visible');
  });

  context('Form submission', () => {
    it('submits new review redirect to ratings page', () => {
      cy.get("input[name='name']").type('Cypress Test');
      cy.get("select[name='ratings']").select('**');
      cy.get("textarea[name='review']").type('Cypress testing');
      cy.get('.ui.button').click();

      cy.get('h1').should('contain', 'View Reviews - READ ONLY');
    });
  });
});

describe('movie app edit page', () => {
  context('editing reviews', () => {
    it('loads the edit page', () => {
      cy.visit('http://localhost:4200/edit');
      cy.get('h1').should('contain', 'Edit Reviews');
    });

    it('click on cypress test review', () => {
      cy.get('.edit-title').contains('Cypress Test - The Shawshank Redemption');
      cy.get('.Cypress').contains('Edit').click();
      cy.get('h2').should('contain', 'review by: Cypress Test');
    });

    it('give 5 star rating and change description', () => {
      cy.get("select[name='ratings']").select('*****');
      cy.get("textarea[name='review']").type('Editing Cypress Testing');
      cy.get('.button').contains('Create').click();

      cy.get('.edit-title').contains('Cypress Test - The Shawshank Redemption');
      cy.get('.edit-review').should('contain', 'Editing Cypress Testing');
    });
  });

  context('deleting review', () => {
    it('loads the edit page', () => {
      cy.visit('http://localhost:4200/edit');
      cy.get('h1').should('contain', 'Edit Reviews');
    });

    it('delete test review', () => {
      cy.get('.edit-title').contains('Cypress Test - The Shawshank Redemption');
      cy.get('.Cypress').contains('Delete').click();
      cy.get('h1').should(
        'contain',
        'Are you sure you want to delete this edit?'
      );
      cy.get('.button').should('contain', 'Delete').click();
      cy.get('.edit-title')
        .contains('Cypress Test - The Shawshank Redemption')
        .should('not.exist');
    });
  });
});
