import { Routes, Route, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import CustomNavBar from './components/organisms/NavBar/NavBar';
import './App.css';
import Footer from './components/Footer';
import Home from './routes/Home';
import Company from './routes/Company';
import Contact from './routes/Contact';
import Products from './routes/Products';
import Services from './routes/Services';
import Error from './routes/Error';

const PageLayout = () => (
  <PageContainer>
    <Outlet />
  </PageContainer>
);

const App = () => (
  <>
    <CustomNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PageLayout />}>
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    <Footer />
  </>
);

export default App;

const PageContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
  box-sizing: border-box;
`;
