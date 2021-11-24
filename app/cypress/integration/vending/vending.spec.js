const numberOfProducts = 16;
const idProducts = [
  "619cfa69c0d8c9407e6a15ed", //limón
  "619cfa69c0d8c9407e6a15ed", //limón
  "619cfa69c0d8c9407e6a15e7", // piña
];
describe("Testing load page vending", () => {
  context("Load page", () => {
    it("Visit page", () => {
      cy.visit("http://localhost:3000");
    });
    it("Check is all products have loaded", () => {
      cy.get("div.showcase-col").should("have.length", numberOfProducts);
    });
  });

  context("Product to cart", () => {
    it("Add product", () => {
      for (let id of idProducts) {
        cy.get("#" + id + "_add").click();
      }
    });
  });

  // TODO: check if correct add product to cart and total price

  context("Delete product to cart", () => {
    it("Delete product", () => {
      cy.get("#" + idProducts[0] + "_delete").click();
    });
  });
});
