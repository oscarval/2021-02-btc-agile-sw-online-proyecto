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
    it("Check is all products have been loaded", () => {
      cy.get("div.showcase-col").should("have.length", numberOfProducts);
    });
  });

  context("Product to cart", () => {
    it("Add product", () => {
      for (let id of idProducts) {
        cy.get("#" + id + "_add").click();
      }
    });

    it("Check name of product added", () => {
      cy.get("#product-name-" + idProducts[0]).should("have.text", "Limón");
    });
    it("Check quatity of product added", () => {
      cy.get("#product-quantity-" + idProducts[0]).should("have.text", "2");
    });

    it("Check price of product added", () => {
      cy.get("#product-price-" + idProducts[0]).should("have.text", "6.80 €");
    });

    it("Check price total of all products added", () => {
      cy.get("#price-total-cart").should("have.text", "9.30 €");
    });
  });

  context("Delete product to cart", () => {
    it("Delete product", () => {
      cy.get("#" + idProducts[0] + "_delete").click();
    });

    it("Check quatity of product added", () => {
      cy.get("#product-quantity-" + idProducts[0]).should("have.text", "1");
    });

    it("Check price of product added", () => {
      cy.get("#product-price-" + idProducts[0]).should("have.text", "3.40 €");
    });

    it("Check price total of all products added", () => {
      cy.get("#price-total-cart").should("have.text", "5.90 €");
    });
  });

  context("Buy products selected", () => {
    it("Click buy products", () => {
      cy.get("#buy-products").click();
      cy.get(".carlist-product-item").should("have.length", "1");
    });

    it("Check reset price total of all products ", () => {
      cy.get("#price-total-cart").should("have.text", "0.00 €");
    });
  });
});
