import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ThankYouPage from "./Components/ThankYouPage";
import OrderPage from "./Components/OrderPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/ordernow" element={<OrderPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
