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

// Full-width pages (Home has carousel + full-bleed sections)
const FullWidthLayout = () => (
  <Main>
    <Outlet />
  </Main>
);

// Centered content pages
const PageLayout = () => (
  <Main>
    <PageContainer>
      <Outlet />
    </PageContainer>
  </Main>
);

const App = () => (
  <AppShell>
    <CustomNavBar />
    <Routes>
      <Route element={<FullWidthLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    <Footer />
  </AppShell>
);

export default App;

const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled.div`
  flex: 1;
  max-width: var(--container-max);
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-6) var(--space-8);
  box-sizing: border-box;
`;
