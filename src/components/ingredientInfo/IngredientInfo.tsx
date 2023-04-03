import { PizzaData } from '../../types/pizza';
import './ingredientInfo.scss';

interface IngredientInfoProps {
  data: PizzaData;
}

const IngredientInfo = ({ data }: IngredientInfoProps) => {
  return (
    <div className="ingredient-info">
      <h2>Ingredient info:</h2>
      <ul>
        {data[0].ingredients.map((item) => {
          if (item.quantity > 0) {
            return (
              <li className="item" key={item.id}>
                <div className="item-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <p className="item-title">
                  {item.name}: <span>{item.quantity}</span>
                </p>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default IngredientInfo;
