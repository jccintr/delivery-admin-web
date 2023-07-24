import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from "./styles.module.css";
import NavBar from '../components/navbar/NavBar';


const MainLayout = () => {

  return (
    <div className={styles.container}>
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default MainLayout