import { Navigate, Route, Routes } from 'react-router';
import { NavBarComponents } from './Componets/NavBarComponents';
import { ProductsPages } from './pages/ProductsPages';
import { CartPage } from './pages/CartPage';
import { ProductProvider } from './context/productProvider';
import { CartProvider } from './context/CartProvider';

export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBarComponents />
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductsPages></ProductsPages>}></Route>
            <Route path="/carrito" element={<CartPage></CartPage>}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  );
};
