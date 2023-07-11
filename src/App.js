
import './App.css';
import { useContext } from "react";
import { DataProvider } from './context/DataContext';
import MainLayout from './MainLayout/MainLayout';
import PrivateRoutes from './PrivateRoutes';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import DataContext from './context/DataContext';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Novo from './pages/novo/Novo';
import Tenants from './pages/tenants/Tenants';

function App() {
  const {setLogged,logged} = useContext(DataContext);

  return (
    <div className="app">
      <DataProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route element={<PrivateRoutes />} >
                    <Route element={<MainLayout setLogged={setLogged}/>}>
                        <Route path="/home" element={<Novo/>}/>
                        <Route path="/tenants" element={<Tenants/>}/>
                    </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
       </DataProvider>
    </div>
  );




}

export default App;
