import { Routes, Route } from 'react-router-dom';

import CustomNavBar from './components/organisms/NavBar/NavBar';
import './App.css';
import Footer from './components/Footer';
import Home from './routes/Home';
import Company from './routes/Company';
import Contact from './routes/Contact';
import Products from './routes/Products';
import Services from './routes/Services';
import Error from './routes/Error';

const App = () => (
  <>
    <CustomNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </>
);

export default App;
