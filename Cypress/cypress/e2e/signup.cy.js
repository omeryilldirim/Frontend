describe("signUp test", () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
        cy.viewport(1200,1200)
    })

    it("signUp", () => {
        cy.get("[data-test='userAvatar']").should("be.visible").click({force:true});
        cy.get("[data-test='registerButton']").should("be.visible").click();
        cy.url().should('include', '/register')
        cy.get("[data-test='signUpHeader']").contains('Sign Up').should("be.visible")
        cy.get("[data-test='firstNameLabel']").contains('First Name').should("be.visible")
        cy.get("[data-test='firstNameInput']").should("be.visible").type('John')
        cy.get("[data-test='lastNameLabel']").contains('Last Name').should("be.visible")
        cy.get("[data-test='lastNameInput']").should("be.visible").type('Due')
        cy.get("[data-test='emailLabel']").contains('Email').should("be.visible")
        cy.get("[data-test='emailInput']").should("be.visible").type('johndue@gmail.com')
        cy.get("[data-test='passwordLabel']").contains('Password').should("be.visible")
        cy.get("[data-test='passwordInput']").should("be.visible").type('123456')
        cy.get("[data-test='registerSubmitBtn']").contains('Register').click()
        cy.url().should('include', '/')
        cy.get("[data-test='userAvatar']").should("be.visible").click();
        cy.get("[data-test='logoutButton']").should("be.visible").click();
        cy.get("[data-test='userAvatar']").should("be.visible").click();
        cy.get("[data-test='loginButton']").should("be.visible").click();
        cy.url().should('include', '/login')

        cy.get("[data-test='signInHeader']").contains('Sign In').should("be.visible")
        cy.get("[data-test='loginEmailLabel']").contains('Email').should("be.visible")
        cy.get("[data-test='loginEmailInput']").should("be.visible").type('johndue@gmail.com')
        cy.get("[data-test='loginPasswordLabel']").contains('Password').should("be.visible")
        cy.get("[data-test='loginPasswordInput']").should("be.visible").type('123456')
        cy.get("[data-test='loginSubmitBtn']").contains('Login').click()
    });
  });
  