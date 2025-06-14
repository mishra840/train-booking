import React from "react";
import { useState, useEffect } from "react";
import { FaBell, FaQuestionCircle, FaHome } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return clearInterval(interval);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <FaHome className={styles.homeIcon} title="Home" />
          <div className={styles.logo}>Ticketify </div>
        </div>
        <div className={styles.navLinks}>
          <span className={styles.navLink}>BOOKINGS</span>
          <span className={styles.navLink}>Contact US</span>
          <span>
            {currentTime.toLocaleDateString()}[
            {currentTime.toLocaleTimeString()}]
          </span>
          <FaBell className={styles.icon} title="Notifications"/>
          <FaQuestionCircle className={styles.icon} title="Help & Support"/>
          {isLoggedIn ? (
            <>
              <span>Welcomr , User</span>
              <button className={styles.authButton}>Logout</button>
            </>
          ) : (
            <>
              <button className={styles.authButton} >Login</button>
              <button className={styles.registerButton} >Register</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
