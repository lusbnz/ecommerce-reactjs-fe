import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components"
import { About, Error, Home, Product, SingleProduct } from "./pages"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
