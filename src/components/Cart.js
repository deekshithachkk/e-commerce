

import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const Cart = ({
  cartItems,
  removeFromCart,
  handleQuantity,
}) => {

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="product-card">
      <Title title={'CART'}/>

      <ul>
        {cartItems.map((item) => (
          <React.Fragment>
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-around",
                borderBottom: "2px solid #ddd",
                paddingTop: "2px",
                alignItems: "center",
              }}
            >

              <div>{item.name}</div>
              <div>
                {" "}
                <input
                  value={item.qty}
                  type="text"
                  onChange={(e) =>
                    handleQuantity(item.id, e.target.value)
                  }
                />{" "}
                x ${item.price} ={item.total}
              </div>


              <FiTrash2
                size={30}
                style={{ color: "red" }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </FiTrash2>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <h2>Total Price:{cartItems.reduce((acu, curr) => acu + curr.total, 0)}</h2>
      {cartItems.length>0 &&<button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

export default Cart;
