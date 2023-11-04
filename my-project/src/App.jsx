import { Outlet } from "react-router-dom";
import Header from "./components/Header"

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage";

import Footer from "./components/Footer"

function App() {
  return (
    <div className='app-jsx'>
      <Header/>
      <Outlet/>

      <HomePage/>
      <AboutPage/>
      <PortfolioPage/>
      <ContactPage/>
      
      <Footer/>
    </div>
  );
}

export default App;