import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router';

export const NavBarComponents = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            HipperCompras
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Productos
              </NavLink>
            </div>
          </div>
          <NavLink to="/carrito">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </div>
      </nav>
  );
};
