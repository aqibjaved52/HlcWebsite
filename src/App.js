import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/Home.css';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import Home from './pages/home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
