import { PizzaData } from './types/pizza';
import coldCutsImg from './assets/cold-cuts.jpg';
import pepperoniImg from './assets/pepperoni.jpg';
import fetaImg from './assets/feta.jpg';
import mozzarellaImg from './assets/mozzarella.jpg';
import swissCheeseImg from './assets/swiss-cheese.jpg';
import spicesImg from './assets/spices.jpg';
import vegetablesImg from './assets/vegetables.jpg';

export const data: PizzaData = [
  {
    amount: 3,
    ingredients: [
      {
        id: '1',
        name: 'Cold cuts',
        price: 3,
        quantity: 0,
        img: coldCutsImg,
      },
      {
        id: '2',
        name: 'Pepperoni',
        price: 2.5,
        quantity: 0,
        img: pepperoniImg,
      },
      { id: '3', name: 'Feta', price: 1.5, quantity: 0, img: fetaImg },
      {
        id: '4',
        name: 'Mozzarella',
        price: 1,
        quantity: 0,
        img: mozzarellaImg,
      },
      {
        id: '5',
        name: 'Swiss cheese',
        price: 2,
        quantity: 0,
        img: swissCheeseImg,
      },
      { id: '6', name: 'Spices', price: 0.25, quantity: 0, img: spicesImg },
      {
        id: '7',
        name: 'Vegetables',
        price: 0.75,
        quantity: 0,
        img: vegetablesImg,
      },
    ],
    saved: {
      configNumber: '',
      ingredients: [],
    },
  },
];
