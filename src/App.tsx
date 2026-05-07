import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CustomNavBar from './components/organisms/NavBar/NavBar';
import './App.css';
import Footer from './components/Footer';
import Company from './routes/Company';
import Contact from './routes/Contact';
import ErrorPage from './routes/Error';
import Home from './routes/Home';
import Products from './routes/Products';
import Services from './routes/Services';
import Solutions from './routes/Solutions';

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
    <GridBg />
    <CustomNavBar />
    <Routes>
      <Route element={<FullWidthLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<PageLayout />}>
        {/* <Route path="/company" element={<Company />} /> */}
        <Route path="/solutions" element={<Solutions />} />
        {/* <Route path="/products/*" element={<Products />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
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
  isolation: isolate;
`;

const GridBg = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-image: radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: linear-gradient(
    to bottom,
    transparent 70%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    black,
    transparent 70%
  );
  pointer-events: none;
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
