let searched_term = "pants";

describe('Search Tests23', () => {
  it('Search with result', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
        cy.get("#search").type(searched_term + "{enter}");
        cy.contains("Search results for: '" + searched_term + "").should("be.visible");
        cy.get("#sorter").should("be.visible");
        cy.get('.products-grid').should('be.visible');
        
    
      });
    });



  