import { IngredientType } from '../../types/pizza';
import Button from '../button/Button';
import './filterItem.scss';

interface FilterItemProps {
  item: IngredientType;
  increment: (item: IngredientType) => void;
  decrement: (item: IngredientType) => void;
}

const FilterItem = ({ item, increment, decrement }: FilterItemProps) => {
  return (
    <li className="filter__item">
      <div className="filter__item-left">
        <h4 className="filter__item-name">{item.name}</h4>
        <span className="filter__item-price">{item.price}$</span>
      </div>
      <div className="filter__item-right">
        <Button
          otherClass="filter__item-btn button__decrement"
          onClick={() => {
            if (item.quantity !== 0) {
              decrement(item);
            }
          }}
        >
          -
        </Button>
        <span className="filter__item-quantity">{item.quantity}</span>
        <Button
          otherClass="filter__item-btn button__increment"
          onClick={() => increment(item)}
        >
          +
        </Button>
      </div>
    </li>
  );
};

export default FilterItem;
