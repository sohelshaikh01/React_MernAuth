import { Outlet } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Header from "./components/Header";
import Notification from "./pages/Notification";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Notification/> */}
      <ToastContainer />
      <div className="my-8">
        <Outlet />
      </div>
    </div>
  )
}

export default App;