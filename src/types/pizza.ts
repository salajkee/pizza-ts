export type IngredientType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
};

export type PizzaData = [
  {
    amount: number;
    ingredients: IngredientType[];
    saved: {
      configNumber: string;
      ingredients: IngredientType[];
    };
  }
];
