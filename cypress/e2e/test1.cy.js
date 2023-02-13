let no_resultds_term = "test";

describe('Search Tests', () => {
  it('Search for no results', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('#search').type(no_resultds_term + "{enter}");
    cy.contains('Your search returned no results').should("be.visible");
    cy.contains("Search results for: '" + no_resultds_term + "'").should("be.visible");
    cy.get("#sorter").should("not.exist");
    

  });
});


