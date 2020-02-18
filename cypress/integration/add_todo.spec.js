describe("Add todo to todolist", function() {
  const website = "http://localhost:3000/";
  it("Finds the input", function() {
    cy.visit(website);
    cy.get('[data-test-id="add-button"]')
      .wait(600)
      .click();
  });
  it("Adds a todo", function() {
    cy.get('[data-test-id="todo-input"]')
      .click()
      .type("TestTodo")
      .type("{enter}");
  });
});
