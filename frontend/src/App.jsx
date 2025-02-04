import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import Notification from "./pages/Notification";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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