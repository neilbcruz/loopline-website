import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';

import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

import InspirationPage from './pages/InspirationPage/InspirationPage';
import VacayAustralia from './components/InspirationComponents/VacayAustralia/VacayAustralia';
import VacayItaly from './components/InspirationComponents/VacayItaly/VacayItaly';
import VacayHawaii from './components/InspirationComponents/VacayHawaii/VacayHawaii';
import VacayNZ from './components/InspirationComponents/VacayNZ/VacayNZ';

import SpecialsPage from './pages/SpecialsPage/SpecialsPage';
import Bootstrap from './pages/Bootstrap/Bootstrap';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <div className='app'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Loopline Travel</title>
          <link rel="icon" href="./assets/icons/favicon.ico" />
          {/* <link rel="canonical" href="https://www.looplinetravel.com/" /> */}
          <meta name="description" content="Loopline Travel Website" />
        </Helmet>
        <Router>
          <PageHeader />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/inspiration' element={<InspirationPage />} />
            <Route path='/australia' element={<VacayAustralia />} />
            <Route path='/italy' element={<VacayItaly />} />
            <Route path='/hawaii' element={<VacayHawaii />} />
            <Route path='/nzealand' element={<VacayNZ />} />
            <Route path='/specials' element={<SpecialsPage />} />
            <Route path='/bootstrap' element={<Bootstrap />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <PageFooter />
        </Router>
      </div>
    </>
  );
}

export default App;
