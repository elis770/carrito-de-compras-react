import { useContext, useEffect, useState } from 'react';
import '../styles/CardComponents.css';
import { CartContext } from '../context/CartContext';
//
export const CartComponets = ({ id, image, title, description, price, handlerAdd, handlerRemove}) => {

   const { shoppingList } = useContext(CartContext)
  const [added, setAdded] = useState(false);

  const addProduct = () => {
    handlerAdd()
    setAdded(true);
  };
  const removeProduct = () => {
    handlerRemove()
    setAdded(false);
  };

  const checkAdded = () => {
    const boolean = shoppingList.some(product => product.id == id)
    setAdded(boolean)
  }
  useEffect(() => {
    checkAdded()
  },)
  
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-contend">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>

        {added ? (
          <button
            type="button"
            className="removeButton"
            onClick={removeProduct}
          >
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="addButton" onClick={addProduct}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
