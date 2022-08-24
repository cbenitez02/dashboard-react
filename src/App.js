import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import UserList from "./pages/users/UserList"
import SingleUser from "./pages/single/SingleUser"
import New from "./pages/new/New"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import ProductsList from "./pages/products/ProductsList";
import Orders from "./pages/orders/Orders";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />}/>
            <Route path="users">
              <Route index element={<UserList/>} />
              <Route path=":userid" element={<SingleUser/>} />
              <Route path="new" element={<New inputs = {userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<ProductsList />}/>
              <Route path=":productid"/>
              <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>} />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />}/>
              <Route path=":orderid"/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
