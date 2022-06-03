it("Should POST the correct json", () => {    
    cy.visit("http://localhost:3000/Users");
  
    cy.wait(1000)  
  
    cy.intercept("DELETE", "http://localhost:8080/api/users/32", {}).as("deleteUser");
  
    cy.get(':nth-child(3) > :nth-child(4) > .btn-group > .btn-danger').click();
  
    cy.wait("@deleteUser").then((interception) => {
        const expectedValue = "Complete";
        expect(JSON.stringify(interception.state)).equal(
          JSON.stringify(expectedValue));
  
          const expectedStatus = 200;
        expect(JSON.stringify(interception.response.statusCode)).equal(
          JSON.stringify(expectedStatus))
    });
  });