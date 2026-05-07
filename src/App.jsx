import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ParentPortal from './pages/ParentPortal';
import SchoolLife from './pages/SchoolLife';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/admissions' element={<Admissions />} />
          <Route path='/school-life' element={<SchoolLife />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/parent-portal' element={<ParentPortal />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
