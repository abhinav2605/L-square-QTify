import Navbar from './components/navbar/navbar';
import Hero from './components/Hero Section/hero';
import './App.css';
import { useEffect, useState } from 'react';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from "./api/api";
import HomePage from './Pages/HomePage/homepage';
// import Outlet from 'react';

function App() {

  const [data, setData] = useState({});

function generateData(key, source){
  source().then((data)=>{
    setData((prevState) => {
      return { ...prevState, [key]:data}
    })
  })
}

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  }, []);

const {topAlbums=[], newAlbums=[], songs=[]} = data;

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {/* <Outlet context = {{data : {topAlbums, newAlbums, songs}}} /> */}
      <HomePage topAlbums={topAlbums} newAlbums={newAlbums} songs={songs} />
    </div>
  );
}

export default App;
