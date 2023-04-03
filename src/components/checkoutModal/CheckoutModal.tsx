import { Link } from 'react-router-dom';
import { IngredientType } from '../../types/pizza';
import Button from '../button/Button';
import './checkoutModal.scss';

interface CheckoutModalProps {
  ingredients: IngredientType[];
  amount: number;
  closeModalCheckout: () => void;
}

const CheckoutModal = ({
  ingredients,
  amount,
  closeModalCheckout,
}: CheckoutModalProps) => {
  return (
    <div className="checkout-modal">
      <h2>Your Order</h2>
      <p>The pizza has the following ingredients:</p>
      <ul>
        {ingredients.map((item) => {
          if (item.quantity > 0) {
            return (
              <li key={item.id}>
                {item.name}: {item.quantity}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h2>Total price: {amount}$</h2>
      <p>Continue to checkout?</p>
      <div className="checkout-modal__button-group">
        <Button
          otherClass="button__dark button button__long"
          onClick={closeModalCheckout}
        >
          Cancel
        </Button>
        <Link className="checkout-modal__link" to="/checkout">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default CheckoutModal;
