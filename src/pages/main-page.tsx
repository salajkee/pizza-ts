import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IngredientType } from '../types/pizza';
import { data } from '../data';
import Ingredient from '../components/ingredient/Ingredient';
import Title from '../components/title/Title';
import Filter from '../components/filter/Filter';
import pizzaImg from '../assets/pizza.jpg';
import LoadModal from '../components/loadModal/LoadModal';
import CheckoutModal from '../components/checkoutModal/CheckoutModal';

const Main = () => {
  const [ingredients, setIngredients] = useState(data[0].ingredients);
  const [savedConfigNumber, setSavedConfigNumber] = useState(
    data[0].saved.configNumber
  );
  const [savedIngredinet, setSavedIngredinet] = useState(
    data[0].saved.ingredients
  );
  const [amount, setAmount] = useState(data[0].amount);
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const [openLoadModal, setOpenLoadModal] = useState(false);
  const [infoText, setInfoText] = useState(false);

  const increment = (item: IngredientType) => {
    setIngredients([
      ...ingredients.map((elem) =>
        item.id === elem.id ? { ...item, quantity: item.quantity + 1 } : elem
      ),
    ]);
    setAmount(amount + item.price);
  };

  const decrement = (item: IngredientType) => {
    setIngredients([
      ...ingredients.map((elem) =>
        item.id === elem.id ? { ...item, quantity: item.quantity - 1 } : elem
      ),
    ]);
    setAmount(amount - item.price);
  };

  const onReset = () => {
    setAmount(3);
    setIngredients([
      ...ingredients.map((elem) => (elem ? { ...elem, quantity: 0 } : elem)),
    ]);
  };

  const onSave = (data: IngredientType[]) => {
    if (amount > 3) {
      setSavedConfigNumber(uuidv4());
      setSavedIngredinet(data);
      setInfoText(true);
    }
  };

  const openModalCheckout = () => setOpenCheckoutModal(true);

  const closeModalCheckout = () => setOpenCheckoutModal(false);

  const openModalLoad = () => setOpenLoadModal(true);

  const closeModalLoad = () => setOpenLoadModal(false);

  const getConfigNumber = (str: string) => {
    if (str === savedConfigNumber) {
      setIngredients(savedIngredinet);
      closeModalLoad();
    }
  };

  return (
    <>
      <main>
        <div className="pizza__wrapper container">
          <div className="pizza__ingredients">
            <Title otherClass="pizza__ingredients-title" text="Your pizza:" />
            <ul className="pizza__ingredients-list">
              <Ingredient img={pizzaImg} />
              {ingredients.map((pizza) => {
                if (pizza.quantity > 0) {
                  return <Ingredient key={pizza.id} img={pizza.img} />;
                }
                return null;
              })}
            </ul>
          </div>
          <Filter
            data={ingredients}
            amount={amount}
            increment={increment}
            decrement={decrement}
            onReset={onReset}
            onSave={onSave}
            openModalCheckout={openModalCheckout}
            openModalLoad={openModalLoad}
            savedConfigNumber={savedConfigNumber}
            infoText={infoText}
          />
        </div>
      </main>

      {openCheckoutModal && (
        <div className="overlay">
          <CheckoutModal
            ingredients={ingredients}
            amount={amount}
            closeModalCheckout={closeModalCheckout}
          />
        </div>
      )}

      {openLoadModal && (
        <div className="overlay">
          <LoadModal
            closeModalLoad={closeModalLoad}
            getConfigNumber={getConfigNumber}
          />
        </div>
      )}
    </>
  );
};

export default Main;
