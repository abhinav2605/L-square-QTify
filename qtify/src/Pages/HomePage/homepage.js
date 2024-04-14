import React, { useState } from "react";
import Card from "../../components/Card/card";
import Hero from "../../components/Hero Section/hero";
import styles from "./homepage.module.css";
import Carousel from "../../components/Carousel/carousel";

function HomePage({ topAlbums, newAlbums, songs }) {
    
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(true);

  function stateChange() {
    setState(!state);
    
  }
  function stateChange1() {
    setState1(!state1);
    
  }
  return (
    <>
      <Hero />
      <div className={styles.heading}>
        <h2>Top albums</h2>
        <button onClick={stateChange} href="#">
          {state ? "Collapse All":"Show All"}
        </button>
      </div>
      {state ? <Carousel data={topAlbums} /> : <></>}

      <div className={styles.heading}>
        <h2>New albums</h2>
        <button onClick={stateChange1} href="#">
          {state1 ? "Collapse All":"Show All"}
        </button>
      </div>
      {state1 ? <Carousel data={newAlbums} /> : <></>}
    </>
  );
}

export default HomePage;
