describe("signUp test", () => {
    it("signUp", () => {
        cy.visit("http://localhost:3000/");
        cy.get("[data-test='userAvatar']").should("be.visible").click();
        cy.get("[data-test='registerButton']").should("be.visible").click();
    });
  });
  