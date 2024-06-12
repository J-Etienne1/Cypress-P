describe("form test", () => {
    beforeEach(() => {
        cy.visit("/forms")
    })
    it("test subscribe from", () => {
        cy.contains(/testing forms/i)
        cy.getDataTest("subscribe-form").find("input").as("subscribe-input")
        cy.get("@subscribe-input").type("jasonetienne1@gmail.com")
        cy.contains(/Successfully subbed: jasonetienne1@gmail.com!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: jasonetienne1@gmail.com!/i).should("exist")
        cy.wait(3000)
    })

})