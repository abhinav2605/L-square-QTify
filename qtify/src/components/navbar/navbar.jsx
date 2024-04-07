import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import styles from "./navbar.module.css";
import Button from "../Button/button";
import Search from "../Search/search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
        </Link>
        <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
