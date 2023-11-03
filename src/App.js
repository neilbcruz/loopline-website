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

import IdeaCruise from './components/IdeasComponents/IdeaCruise/IdeaCruise';
import IdeaFamily from './components/IdeasComponents/IdeaFamily/IdeaFamily';
import IdeaWedding from './components/IdeasComponents/IdeaWedding/IdeaWedding';
import IdeaAdventure from './components/IdeasComponents/IdeaAdventure/IdeaAdventure';
import IdeaWildlife from './components/IdeasComponents/IdeaWildlife/IdeaWildlife';
import IdeaRomantic from './components/IdeasComponents/IdeaRomantic/IdeaRomantic';
import IdeaGolf from './components/IdeasComponents/IdeaGolf/IdeaGolf';
import IdeaBeach from './components/IdeasComponents/IdeaBeach/IdeaBeach';
import IdeaEuropean from './components/IdeasComponents/IdeaEuropean/IdeaEuropean';
import IdeaRiverCruise from './components/IdeasComponents/IdeaRiverCruise/IdeaRiverCruise';
import IdeaAllInclusive from './components/IdeasComponents/IdeaAllInclusive/IdeaAllInclusive';

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
            <Route path='/ideacruise' element={<IdeaCruise />} />
            <Route path='/ideafamily' element={<IdeaFamily />} />
            <Route path='/ideawedding' element={<IdeaWedding />} />
            <Route path='/ideaadventure' element={<IdeaAdventure />} />
            <Route path='/ideawildlife' element={<IdeaWildlife />} />
            <Route path='/idearomantic' element={<IdeaRomantic />} />
            <Route path='/ideagolf' element={<IdeaGolf />} />
            <Route path='/ideabeach' element={<IdeaBeach />} />
            <Route path='/ideaeuropean' element={<IdeaEuropean />} />
            <Route path='/idearivercruise' element={<IdeaRiverCruise />} />
            <Route path='/ideaallinclusive' element={<IdeaAllInclusive />} />
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
