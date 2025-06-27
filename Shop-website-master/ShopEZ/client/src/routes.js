// client/src/routes.js
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <ProductDetails /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/cart', element: <Cart /> },
  { path: '/dashboard', element: <Dashboard /> },
];
