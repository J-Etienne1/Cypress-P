describe("form test", () => {
    beforeEach(() => {
        cy.visit("/forms")
    })
    it("test subscribe from", () => {
        cy.contains(/testing forms/i)
        cy.getDataTest("subscribe-form").find("input")
    })

})