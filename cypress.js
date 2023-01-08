describe('Google search', () => {
    it('should search for a term and display results', () => {
      // Open a web browser and navigate to the Google homepage
      cy.visit('https://www.google.com');
  
      // Locate the search input field and enter a search term
      cy.get('input[name=q]')
        .type('Cypress automation');
  
      // Locate the search button and click it to initiate the search
      cy.get('button[name=btnK]')
        .click();
  
      // Wait for the search results to load
      cy.get('#search')
        .should('exist');
    });
  });

