import './App.css';
import Homepage from './components/HomePage';
import BookingPage from './components/BookingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
