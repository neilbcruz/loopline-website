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
import AllInclusiveResorts from './components/IdeasComponents/IdeaAllInclusive/AllInclusiveResort';
import AllInclusiveWhy from './components/IdeasComponents/IdeaAllInclusive/AllInclusiveWhy';
import AllInclusiveDestinations from './components/IdeasComponents/IdeaAllInclusive/AllInclusiveDestinations';

import SpecialsPage from './pages/SpecialsPage/SpecialsPage';
import CruiseSilverseaFares from './components/CruiseComponents/CruiseSilversea/CruiseSilverseaFares';
import CruiseHollandHaveitall from './components/CruiseComponents/CruiseHolland/CruiseHollandHaveitall';
import CruiseNorwegianAdventure from './components/CruiseComponents/CruiseNorwegian/CruiseNorwegianAdventure';
import CruiseCelebrityResort from './components/CruiseComponents/CruiseCelebrity/CruiseCelebrityResort';
import CruiseNorwegianVacation from './components/CruiseComponents/CruiseNorwegian/CruiseNorwegianVacation';
import CruiseCrystalSolo from './components/CruiseComponents/CruiseCrystal/CruiseCrystalSolo';
import CruiseCaribbeanIcon from './components/CruiseComponents/CruiseCaribbean/CruiseCaribbeanIcon';
import CruiseSeabournDestinations from './components/CruiseComponents/CruiseSeabourn/CruiseSeabornDestinations';
import CruiseHollandYoucanhave from './components/CruiseComponents/CruiseHolland/CruiseHollandYoucanhave';
import CruiseAmawaterwaysRiver from './components/CruiseComponents/CruiseAmawaterways/CruiseAmawaterwaysRiver';
import CruiseTravelLeadersElevate from './components/CruiseComponents/CruiseTravelLeaders/CruiseTravelLeadersElevate';
import CruiseCelebrityGetaway from './components/CruiseComponents/CruiseCelebrity/CruiseCelebrityGetaway';
import CruiseVVoyagesLuxury from './components/CruiseComponents/CruiseVVoyages/CruiseVVoyagesLuxury';

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
            <Route path='/inspiration/australia' element={<VacayAustralia />} />
            <Route path='/inspiration/italy' element={<VacayItaly />} />
            <Route path='/inspiration/hawaii' element={<VacayHawaii />} />
            <Route path='/inspiration/nzealand' element={<VacayNZ />} />
            <Route path='/inspiration/cruise' element={<IdeaCruise />} />
            <Route path='/inspiration/family' element={<IdeaFamily />} />
            <Route path='/inspiration/wedding' element={<IdeaWedding />} />
            <Route path='/inspiration/adventure' element={<IdeaAdventure />} />
            <Route path='/inspiration/wildlife' element={<IdeaWildlife />} />
            <Route path='/inspiration/romantic' element={<IdeaRomantic />} />
            <Route path='/inspiration/golf' element={<IdeaGolf />} />
            <Route path='/inspiration/beach' element={<IdeaBeach />} />
            <Route path='/inspiration/european' element={<IdeaEuropean />} />
            <Route path='/inspiration/rivercruise' element={<IdeaRiverCruise />} />
            <Route path='/inspiration/allinclusive' element={<IdeaAllInclusive />} />
            <Route path='/inspiration/allinclusive/resorts' element={<AllInclusiveResorts />} />
            <Route path='/inspiration/allinclusive/why' element={<AllInclusiveWhy />} />
            <Route path='/inspiration/allinclusive/destinations' element={<AllInclusiveDestinations />} />

            <Route path='/specials' element={<SpecialsPage />} />
            <Route path='/specials/silversea-fares' element={<CruiseSilverseaFares />} />
            <Route path='/specials/holland-haveitall' element={<CruiseHollandHaveitall />} />
            <Route path='/specials/norwegian-adventure' element={<CruiseNorwegianAdventure />} />
            <Route path='/specials/celebrity-resort' element={<CruiseCelebrityResort />} />
            <Route path='/specials/norwegian-vacation' element={<CruiseNorwegianVacation />} />
            <Route path='/specials/crystal-solo' element={<CruiseCrystalSolo />} />
            <Route path='/specials/caribbean-icon' element={<CruiseCaribbeanIcon />} />
            <Route path='/specials/seabourn-destinations' element={<CruiseSeabournDestinations />} />
            <Route path='/specials/holland-youcanhave' element={<CruiseHollandYoucanhave />} />
            <Route path='/specials/amawayerways-river' element={<CruiseAmawaterwaysRiver />} />
            <Route path='/specials/travelleaders-elevate' element={<CruiseTravelLeadersElevate />} />
            <Route path='/specials/celebrity-getaway' element={<CruiseCelebrityGetaway />} />
            <Route path='/specials/vvoyages-luxury' element={<CruiseVVoyagesLuxury />} />

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
