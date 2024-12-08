import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donation from "./pages/Donation"
import DonatedBooks from "./pages/DonatedBooks"


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donatedbooks" element={<DonatedBooks />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
