describe('Fundamentals test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    //cy.get('[data-test="fundamentals-header"]').contains("Testing Fundamentals")
    //cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)   regex and using i makes it case insensitive
    cy.get('[data-test="fundamentals-header"]').should("contain.text", "Testing Fundamentals")
  })
})