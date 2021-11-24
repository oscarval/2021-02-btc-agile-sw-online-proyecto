import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Utils } from "../../utils/Utils";
import "./Home.scss";
// bootstrap
import Button from "react-bootstrap/Button";
import { ProductApiRequest } from "../../services/api/product-api-request";
import { CartApiRequest } from "../../services/api/cart-api-request";

const userisDefault: string = "1000";

const Home = (props: any) => {
  // get all products and format
  useEffect(() => {
    props.getAllProducts();
  }, []);

  const products = props.state.Products;
  const productsAgroup = () => {
    let result = [];
    if (products && products.data) {
      result = products.data.reduce(
        (acc: any[], product: any, index: number) => {
          if (index % 5 === 0) {
            acc[acc.length] = [];
            acc[acc.length - 1].push(product);
          } else {
            acc[acc.length - 1].push(product);
          }
          return acc;
        },
        []
      );
    }
    return result;
  };

  // get shopping cart
  useEffect(() => {
    props.getProductsCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cart = props.state.Cart;
  const cartProducts = cart && cart.data ? cart.data.products : [];
  const addProduct = (product: any) => {
    const productIndex = cartProducts.findIndex(
      (item: any) => item._id === product._id
    );
    if (productIndex >= 0) {
      cartProducts[productIndex].quantity++;
    } else {
      product.quantity = 1;
      cartProducts.push(product);
    }
    const newListProduct = cartProducts;
    const cartData = {
      userid: userisDefault,
      products: newListProduct,
    };
    props.updateCart(cartData);
  };

  const deleteProduct = (id: string) => {
    let empty = false;
    const productIndex = cartProducts.findIndex((item: any) => item._id === id);
    if (productIndex >= 0 && cartProducts[productIndex].quantity > 1) {
      cartProducts[productIndex].quantity--;
    } else {
      if (cartProducts.length === 1) {
        empty = true;
      } else {
        cartProducts.splice(productIndex, 1);
      }
    }
    const newListProduct = empty ? [] : cartProducts;
    const cartData = {
      userid: userisDefault,
      products: newListProduct,
    };
    props.updateCart(cartData);
  };

  return (
    <div className='Home'>
      <section className='showcase-container'>
        <div className='showcase-content'>
          <div className='showcase-header'>
            <h4>Selecct the product</h4>
          </div>
          <div className='showcase-grid'>
            <div className='showcase-grid-header'>Fruits and Vegetables</div>
            <div className='showcase-grid-content'>
              <div className='showcase-grid-content-wrapper'>
                {productsAgroup().map((productA: any, indexParent: any) => {
                  return (
                    <div className='showcase-row' key={"group" + indexParent}>
                      {productA.map((product: any, index: number) => {
                        return (
                          <div className='showcase-col' key={product.name}>
                            <CustomImg
                              src={product.img}
                              className='img-format'
                              alt={product.name}
                            />
                            <span className={product._id + "-price"}>
                              {Utils.formatCurrency(product.price)}
                            </span>
                            <Button
                              id={product._id + "_add"}
                              variant='success'
                              size='sm'
                              className='addbutton'
                              onClick={() => {
                                addProduct(product);
                              }}>
                              Add
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='showcase-grid-footer'>
              Thanks for shopping with us
            </div>
          </div>
        </div>
      </section>

      <aside className='carlist-container'>
        <div className='carlist-content'>
          <div className='carlist-header'>
            <h4>Shopping list</h4>
          </div>
          <div className='carlist-car'>
            <div className='shopping-car-drop'>
              <CustomImg
                src='shopping-car.png'
                className='img-format'
                alt='Car'
              />
            </div>
            <div className='shopping-car-total'>
              <p>Total</p>
              <p className='total'>
                {Utils.formatCurrency(cart && cart.data ? cart.data.total : 0)}
              </p>
            </div>
          </div>
          <div className='carlist-products'>
            <div className='carlist-product-item'>
              <div className='product-name'>Fruit</div>
              <div className='product-"quantity"'>Quantity</div>
              <div className='product-price'>Price</div>
              <div className='product-delete'>Remove</div>
            </div>
            {cartProducts &&
              cartProducts.map((product: any, index: number) => {
                return (
                  <div
                    id={"product-item-" + product.name}
                    className='carlist-product-item'
                    key={index + product._id}>
                    <div
                      className='product-name'
                      id={"product-name-" + product.name}>
                      {product.name}
                    </div>
                    <div
                      className='product-quantity'
                      id={"product-quantity-" + product.name}>
                      {product.quantity}
                    </div>
                    <div
                      className='product-price'
                      id={"product-price-" + product.name}>
                      {Utils.formatCurrency(product.price)}
                    </div>
                    <div className='product-delete'>
                      <Button
                        id={product._id + "_delete"}
                        variant='warning'
                        size='sm'
                        className='addbutton'
                        onClick={() => {
                          deleteProduct(product._id);
                        }}>
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </aside>
    </div>
  );
};

type CustomImgProps = {
  src: string;
  className: string;
  alt: string;
};

class CustomImg extends React.Component<CustomImgProps, any> {
  render() {
    let image_path: any;
    try {
      image_path = require("../../assets/img/" + this.props.src);
    } catch (err) {
      image_path = require("../../assets/img/default.jpg"); //set default image path
    }
    return (
      <img
        src={image_path.default}
        className={this.props.className}
        alt={this.props.alt}
      />
    );
  }
}

const productApirequest: ProductApiRequest = new ProductApiRequest();
const cartApirequest: CartApiRequest = new CartApiRequest();

const mapStateToProps = (state: any) => ({ state: state });

const mapDispacthToProps = (dispatch: any) => ({
  getAllProducts: () => {
    productApirequest.GetAll()(dispatch);
  },
  getProductsCart: () => {
    cartApirequest.GetAll(userisDefault)(dispatch);
  },
  updateCart: (cartData: any) => {
    cartApirequest.UpdateCart(cartData)(dispatch);
  },
});

const connectedHome = connect(mapStateToProps, mapDispacthToProps)(Home);

export default connectedHome;
