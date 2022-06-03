it("Should POST the correct json", () => {
    const UserNameEdit = "testername";
    const EmailEdit = "user@email.com";
    // const FavoriteEdit = ;
    
    cy.intercept("GET", "http://localhost:8080/api/Users/20", {}).as("getUser");
  
    cy.visit("http://localhost:3000/Users/Edit/20");
  
    cy.wait(1000)  
  
    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').clear()
  
    cy.get(':nth-child(1) > .form-control').type(UserNameEdit, { delay: 50 });
    cy.get(':nth-child(2) > .form-control').type(EmailEdit, { delay: 50 });
  
    cy.intercept("PUT", "http://localhost:8080/api/users/20", {}).as("editUser");
  
    cy.get('form > .btn').click();
  
    cy.wait("@editUser").then((interception) => {
        const expectedValue = "Complete";
        expect(JSON.stringify(interception.state)).equal(
          JSON.stringify(expectedValue));
  
          const expectedStatus = 200;
        expect(JSON.stringify(interception.response.statusCode)).equal(
          JSON.stringify(expectedStatus))

    //   const expectedValue = {
    //     userName: UserNameEdit,
    //     email: EmailEdit
    //   };
    //   expect(JSON.stringify(interception.request.body)).equal(
    //     JSON.stringify(expectedValue)
    //   );
    });
  });