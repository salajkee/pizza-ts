import CustomForm from '../components/form/CustomForm';
import IngredientInfo from '../components/ingredientInfo/IngredientInfo';
import { PizzaData } from '../types/pizza';

interface CheckoutProps {
  data: PizzaData;
}

const Checkout = ({ data }: CheckoutProps) => {
  return (
    <main>
      <div className="checkout__wrapper container">
        <IngredientInfo data={data} />
        <CustomForm />
      </div>
    </main>
  );
};

export default Checkout;
