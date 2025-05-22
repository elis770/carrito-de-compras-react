import { useContext } from 'react';
import { CartComponets } from './CartComponets';
import { ProductContext } from '../context/productContext';
import { CartContext } from '../context/CartContext';

export const ProductsPages = () => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(CartContext);

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map(product => {
        return (
          <CartComponets
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            handlerAdd={() => addProduct(product)}
            handlerRemove={() => removeProduct(product.id)}
          />
        );
      })}
    </>
  );
};