import CartContext from '../../context/CartContext'

import './index.css'

const calculateTotalBill = eachItem => {
  const {quantity, price} = eachItem
  return quantity * price
}

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalBillArray = cartList.map(eachItem =>
        calculateTotalBill(eachItem),
      )
      const totalBill = totalBillArray.reduce((acc, val) => acc + val, 0)
      return (
        <div className="summary-container">
          <div className="summary">
            <p className="order-total-summary">
              Order Total: <span className="bill-amount">Rs {totalBill}/-</span>
            </p>
            <p className="num-items-summary">{cartList.length} items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
