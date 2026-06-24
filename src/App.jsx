import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { LanguageProvider } from './Context/LanguageContext';

function App() {

  return (
    <>
      <LanguageProvider>
        <Header />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
