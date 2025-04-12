import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, RouterProvider
} from 'react-router-dom';

import store from './store.js';
import { Provider } from 'react-redux';

import PrivateRoute from "./components/PrivateRoute.jsx";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />}/>
      
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />}/>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
