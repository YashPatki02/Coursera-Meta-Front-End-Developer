import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Specials from "./components/Specials/Specials";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  const homeHeader = {
    cafeTitle: "Little Lemon",
    cafeLocation: "Chicago",
    cafeDescription: `A small restaurant with a big heart, making it easy to eat well on the go. 
      We serve fresh, wholesome, and delicious food in a fast, casual environment.
      We are committed to using local, organic, and sustainable ingredients.`,
    cafeButtonName: "Reserve Table",
    image: "restaurantFood",
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  cafeTitle={homeHeader.cafeTitle}
                  cafeLocation={homeHeader.cafeLocation}
                  cafeDescription={homeHeader.cafeDescription}
                  cafeButtonName={homeHeader.cafeButtonName}
                  image={homeHeader.image}
                />
                <Main />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route
            path="/contact"
            element={
              <>
                <Header
                  cafeTitle="Contact Us"
                  cafeLocation="Questions? Comments? Concerns?"
                  cafeDescription={homeHeader.cafeDescription}
                  cafeButtonName={homeHeader.cafeButtonName}
                  image={homeHeader.image}
                />
                <About />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <Header
                  cafeTitle="Order Online"
                  cafeLocation="Order online for pickup or delivery!"
                  cafeDescription={homeHeader.cafeDescription}
                  cafeButtonName={homeHeader.cafeButtonName}
                  image={homeHeader.image}
                />
                <Specials />
                <About />
              </>
            }
          />
          <Route
            path="/reserve"
            element={
              <>
                <BookingPage />
                <About />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
