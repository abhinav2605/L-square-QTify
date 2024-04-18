import "./App.css";
import AlbumSongsPage from "./components/Album Songs Page/AlbumSongsPage";
import HomePage from "./components/Home Page/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    // <div>
    //   <Navbar />
    //   {/* <Hero /> */}
    //   {/* <Outlet context = {{data : {topAlbums, newAlbums, songs}}} /> */}
    //   <HomePage />
    // </div>
    <>
      <Routes>
        {" "}
        <Route path="/" Component={HomePage} />{" "}
        <Route path="/album/:title" Component={AlbumSongsPage} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
