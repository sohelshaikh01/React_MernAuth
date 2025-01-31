import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import store from './store.js';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';


const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<RegisterScreen />} />
  </Route>
 )
)

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
     <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
