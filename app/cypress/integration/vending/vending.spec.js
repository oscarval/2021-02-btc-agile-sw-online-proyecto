import { Utils } from "../../../src/utils/Utils";

const numberOfProducts = 16;
const idProducts = [];
let nameProduct1 = "";
let priceProduct1 = 0;
let priceProduct2 = 0;
let priceTotal = 0;

describe("Testing load page vending", () => {
  context("Load page", () => {
    it("Visit page", () => {
      cy.visit("http://localhost:3000");
    });
    it("Check is all products have been loaded", () => {
      cy.get("div.showcase-col").should("have.length", numberOfProducts);
      // add id products

      cy.get("div.showcase-col")
        .eq(0)
        .find("button")
        .invoke("attr", "id")
        .then((id) => {
          idProducts.push(id.replace("_add", ""));
        });
      cy.get("div.showcase-col")
        .eq(0)
        .find("button")
        .invoke("attr", "id")
        .then((id) => {
          idProducts.push(id.replace("_add", ""));
        });
      cy.get("div.showcase-col")
        .eq(1)
        .find("button")
        .invoke("attr", "id")
        .then((id) => {
          idProducts.push(id.replace("_add", ""));
        });
      // get name
      cy.get("div.showcase-col")
        .eq(0)
        .find("img")
        .invoke("attr", "alt")
        .then((alt) => {
          nameProduct1 = alt;
        });
      // get price
      cy.get("div.showcase-col")
        .eq(0)
        .find("span")
        .invoke("text")
        .then((text) => {
          priceProduct1 = +text.replace("€", "");
        });
      cy.get("div.showcase-col")
        .eq(1)
        .find("span")
        .invoke("text")
        .then((text) => {
          priceProduct2 = +text.replace("€", "");
          priceTotal = priceProduct1 * 2 + priceProduct2;
        });
    });
  });

  context("Product to cart", () => {
    it("Add product", () => {
      for (let id of idProducts) {
        cy.get("#" + id + "_add").click();
      }
    });

    it("Check name of product added", () => {
      cy.get("#product-name-" + idProducts[0]).should(
        "have.text",
        nameProduct1
      );
    });
    it("Check quatity of product added", () => {
      cy.get("#product-quantity-" + idProducts[0]).should("have.text", "2");
    });

    it("Check price of product added", () => {
      cy.get("#product-price-" + idProducts[0]).should(
        "have.text",
        Utils.formatCurrency(priceProduct1 * 2)
      );
    });

    it("Check price total of all products added", () => {
      cy.get("#price-total-cart").should(
        "have.text",
        Utils.formatCurrency(priceTotal)
      );
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
      cy.get("#product-price-" + idProducts[0]).should(
        "have.text",
        Utils.formatCurrency(priceProduct1)
      );
    });

    it("Check price total of all products added", () => {
      cy.get("#price-total-cart").should(
        "have.text",
        Utils.formatCurrency(priceTotal - priceProduct1)
      );
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
