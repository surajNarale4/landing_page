import { StrictMode, createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardList from './components/specificCards/CardList.jsx';
import Cart from './components/cartComponents/Cart.jsx'
import SearchResult from './components/searchResult/SearchResult.jsx';

// Example card types
const cardType = [
  {
    id: 1,
    type: 'mobile',
    src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/V3/PC/PC_QC_372x232_1._SY232_CB568164155_.jpg'
  },
  {
    id: 2,
    type: 'laptop',
    src: 'https://m.media-amazon.com/images/I/41dOILJpWGL._SR480,440_.jpg'
  },
  {
    id: 3,
    type: 'fashion',
    src: 'https://m.media-amazon.com/images/I/61kTqYCKEeL._AC_UL320_.jpg'
  },
  {
    id: 4,
    type: 'Electronics',
    src: 'https://rukminim2.flixcart.com/image/150/150/k12go7k0/wardrobe-closet/b/h/4/particle-board-fbibwdpbmtwn68141i-evok-light-walnut-original-imafkpevwn7gzxuj.jpeg?q=70'
  },
];

// Create contexts
export const CardTypeContext = createContext([]);
export const CartContext = createContext([]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/type/:type/',
    element: <CardList />
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path:'/search/:searchQuery',
    element:<SearchResult/>
  }
]);

function Main() {
 
  const [cart, setCart] = useState([]);
  const [cardTypes, setCardTypes] = useState(cardType);  // Though you may not need to update cardTypes, you can still set it here.

  return (

      <CartContext.Provider value={{ cart, setCart }}>
        <CardTypeContext.Provider value={cardTypes}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </CardTypeContext.Provider>
      </CartContext.Provider>
 
  );
}

createRoot(document.getElementById('root')).render(<Main />);
