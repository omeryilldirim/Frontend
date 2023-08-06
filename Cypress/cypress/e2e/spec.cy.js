describe("navbar test", () => {
  it("navbar", () => {
    // cy.pause()
    cy.visit("http://localhost:3000/");
    // cy.wait(3000)
    // cy.get('.pr-2').contains('React Movie App') //? not best practice
    cy.get('[data-test="movieHeader"]').contains("React Movie App");
    cy.wait(1000);
    cy.get("[data-test='switchMode']").should("be.visible").dblclick();
    cy.wait(1000);
    cy.get("[data-test='userAvatar']").should("be.visible").click();
    cy.wait(1000);
    cy.get("[data-test='registerButton']").should("be.visible").click();
    cy.wait(1000);
    cy.go('back')
    cy.wait(1000);
    cy.get("[data-test='userAvatar']").should("be.visible").click();
    cy.get("[data-test='loginButton']").should("be.visible").click();
    cy.wait(1000);
    cy.get("[data-test='userAvatar']").should("be.visible").click();
    cy.get("[data-test='logoutButton']").should("be.visible").click();

  });
});
