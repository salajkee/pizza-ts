import './ingredient.scss';

interface IngredientProps {
  img: string;
}

const Ingredient = ({ img }: IngredientProps) => {
  return (
    <li className="ingredient__item">
      <img className="ingredient__item-img" src={img} alt="img" />
    </li>
  );
};

export default Ingredient;
