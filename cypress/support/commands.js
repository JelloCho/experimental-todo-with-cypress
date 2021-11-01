Cypress.Commands.add("seeAndVisit", (seedData="fixture:todos") => {
    cy.server();
    cy.route("GET", "/api/todos", seedData);
    // make a request before visiting
    cy.visit("/");
});
