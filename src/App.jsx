import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { LanguageProvider } from './Context/LanguageContext';
import ScrollToTop from './Common/ScrollToTop/ScrollToTop';

function App() {

  return (
    <>
      <LanguageProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
