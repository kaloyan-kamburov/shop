import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route,
} from 'react-router-dom'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import App from './App.tsx'
import HomeScreen from './screens/HomeScreen.tsx'
import ProductScreen from './screens/ProductScreen.tsx'
import CartScreen from './screens/CartScreen.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Route>,
  ),
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
