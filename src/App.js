import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const header = {
    cafeTitle: "Little Lemon",
    cafeLocation: "Chicago",
    cafeDescription:
      `A small restaurant with a big heart, making it easy to eat well on the go. 
      We serve fresh, wholesome, and delicious food in a fast, casual environment.
      We are committed to using local, organic, and sustainable ingredients.`,
    cafeButtonName: "Reserve Table",
    image: "restaurantFood",
  };

  return (
    <>
      <Nav />
      <Header
        cafeTitle={header.cafeTitle}
        cafeLocation={header.cafeLocation}
        cafeDescription={header.cafeDescription}
        cafeButtonName={header.cafeButtonName}
        image={header.image} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
