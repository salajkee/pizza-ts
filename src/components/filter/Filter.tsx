import { IngredientType } from '../../types/pizza';
import Button from '../button/Button';
import FilterItem from '../filterItem/FilterItem';
import Title from '../title/Title';
import './filter.scss';

interface FilterProps {
  data: IngredientType[];
  amount: number;
  increment: (item: IngredientType) => void;
  decrement: (item: IngredientType) => void;
  onReset: () => void;
  onSave: (data: IngredientType[]) => void;
  openModalCheckout: () => void;
  openModalLoad: () => void;
  infoText: boolean;
  savedConfigNumber: string;
}

const Filter = ({
  data,
  amount,
  increment,
  decrement,
  onReset,
  onSave,
  openModalCheckout,
  openModalLoad,
  savedConfigNumber,
  infoText,
}: FilterProps) => {
  return (
    <div className="filter">
      <div className="filter__top">
        <Title otherClass="filter__title" text="Your pizza:" />
        <span className="filter__top-amount">{amount}$</span>
        <Button otherClass="button__long" onClick={onReset}>
          Reset
        </Button>
      </div>
      <ul className="filter__list">
        {data.map((item) => (
          <FilterItem
            key={item.id}
            item={item}
            increment={increment}
            decrement={decrement}
          />
        ))}
        <li className="filter__item filter__item-amount">
          Total <span>{amount}$</span>
        </li>
        <li className="filter__item filter__item-btns">
          <Button otherClass="button__long" onClick={() => onSave(data)}>
            Save Pizza
          </Button>
          <Button
            otherClass="button__long button__blue"
            onClick={openModalCheckout}
          >
            Checkout
          </Button>
        </li>
        <li className="filter__item filter__item-bottom">
          <Button
            otherClass="button__long button__dark"
            onClick={openModalLoad}
          >
            Load Pizza
          </Button>
        </li>
      </ul>
      {infoText && (
        <p className="filter__bot-info">
          Your pizza configuration has been saved. Your number is:
          <span> {savedConfigNumber}</span>
        </p>
      )}
    </div>
  );
};

export default Filter;
