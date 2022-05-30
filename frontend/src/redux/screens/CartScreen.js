import "./CartScreen.css";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  return (
    <div className="cartScreen">
      <div className="cartScreen_left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartScreen_right">
        <div className="cartScreen_info">
          <p>SubTotal: (0) items</p>
          <p>Price: $49.9</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
