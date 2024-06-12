describe("form test", () => {
    beforeEach(() => {
        cy.visit("/forms")
    })
    it("test subscribe from", () => {
        //Happy Path - correct email format
        cy.contains(/testing forms/i)
        cy.getDataTest("subscribe-form").find("input").as("subscribe-input")
        cy.get("@subscribe-input").type("jasonetienne1@gmail.com")
        cy.contains(/Successfully subbed: jasonetienne1@gmail.com!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: jasonetienne1@gmail.com!/i).should("exist")
        cy.wait(3000)
        cy.contains(/Successfully subbed: jasonetienne1@gmail.com!/i).should("not.exist")

        //Unhappy Path - incorrect email format
        cy.get("@subscribe-input").type("jasonetienne1@gmail.io")
        cy.contains(/invalid email: jasonetienne1@gmail.io!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/invalid email: jasonetienne1@gmail.io!/i).should("exist")
        cy.wait(3000)
        cy.contains(/invalid email: jasonetienne1@gmail.io!/i).should("not.exist")
        
        //Unhappy Path - no input for email
        cy.contains(/fail!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/fail!/i).should("exist")
    })
})