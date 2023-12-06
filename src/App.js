import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';

import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

import InspirationPage from './pages/InspirationPage/InspirationPage';
import VacayAustralia from './components/ComponentsInspiration/VacayAustralia/VacayAustralia';
import VacayItaly from './components/ComponentsInspiration/VacayItaly/VacayItaly';
import VacayHawaii from './components/ComponentsInspiration/VacayHawaii/VacayHawaii';
import VacayNZ from './components/ComponentsInspiration/VacayNZ/VacayNZ';
import IdeaCruise from './components/ComponentsIdeas/IdeaCruise/IdeaCruise';
import IdeaFamily from './components/ComponentsIdeas/IdeaFamily/IdeaFamily';
import IdeaWedding from './components/ComponentsIdeas/IdeaWedding/IdeaWedding';
import IdeaAdventure from './components/ComponentsIdeas/IdeaAdventure/IdeaAdventure';
import IdeaWildlife from './components/ComponentsIdeas/IdeaWildlife/IdeaWildlife';
import IdeaRomantic from './components/ComponentsIdeas/IdeaRomantic/IdeaRomantic';
import IdeaGolf from './components/ComponentsIdeas/IdeaGolf/IdeaGolf';
import IdeaBeach from './components/ComponentsIdeas/IdeaBeach/IdeaBeach';
import IdeaEuropean from './components/ComponentsIdeas/IdeaEuropean/IdeaEuropean';
import IdeaRiverCruise from './components/ComponentsIdeas/IdeaRiverCruise/IdeaRiverCruise';
import IdeaAllInclusive from './components/ComponentsIdeas/IdeaAllInclusive/IdeaAllInclusive';
import AllInclusiveResorts from './components/ComponentsIdeas/IdeaAllInclusive/AllInclusiveResort';
import AllInclusiveWhy from './components/ComponentsIdeas/IdeaAllInclusive/AllInclusiveWhy';
import AllInclusiveDestinations from './components/ComponentsIdeas/IdeaAllInclusive/AllInclusiveDestinations';

import SpecialsPage from './pages/SpecialsPage/SpecialsPage';
import CruiseSilverseaFares from './components/ComponentsCruise/CruiseSilversea/CruiseSilverseaFares';
import CruiseHollandHaveitall from './components/ComponentsCruise/CruiseHolland/CruiseHollandHaveitall';
import CruiseNorwegianAdventure from './components/ComponentsCruise/CruiseNorwegian/CruiseNorwegianAdventure';
import CruiseCelebrityResort from './components/ComponentsCruise/CruiseCelebrity/CruiseCelebrityResort';
import CruiseNorwegianVacation from './components/ComponentsCruise/CruiseNorwegian/CruiseNorwegianVacation';
import CruiseCrystalSolo from './components/ComponentsCruise/CruiseCrystal/CruiseCrystalSolo';
import CruiseCaribbeanIcon from './components/ComponentsCruise/CruiseCaribbean/CruiseCaribbeanIcon';
import CruiseSeabournDestinations from './components/ComponentsCruise/CruiseSeabourn/CruiseSeabornDestinations';
import CruiseHollandYoucanhave from './components/ComponentsCruise/CruiseHolland/CruiseHollandYoucanhave';
import CruiseAmawaterwaysRiver from './components/ComponentsCruise/CruiseAmawaterways/CruiseAmawaterwaysRiver';
import CruiseTravelLeadersElevate from './components/ComponentsCruise/CruiseTravelLeaders/CruiseTravelLeadersElevate';
import CruiseCelebrityGetaway from './components/ComponentsCruise/CruiseCelebrity/CruiseCelebrityGetaway';
import CruiseVVoyagesLuxury from './components/ComponentsCruise/CruiseVVoyages/CruiseVVoyagesLuxury';
import CruiseNorwegianFeelfree from './components/ComponentsCruise/CruiseNorwegian/CruiseNorwegianFeelfree';
import CruiseAmawaterwaysSail from './components/ComponentsCruise/CruiseAmawaterways/CruiseAmawaterwaysSail';
import CruiseCaribbeanSale from './components/ComponentsCruise/CruiseCaribbean/CruiseCaribbeanSale';
import HotelSandalsCuracao from './components/ComponentsHotel/HotelSandals/HotelSandalsCuracao';
import HotelWestjetVacation from './components/ComponentsHotel/HotelWestjet/HotelWestjetVacation';
import HotelSandalsDunnRiver from './components/ComponentsHotel/HotelSandals/HotelSandalsDunnRiver';
import HotelPalaceVacation from './components/ComponentsHotel/HotelPalace/HotelPalaceVacation';
import HotelWestjetParadise from './components/ComponentsHotel/HotelWestjet/HotelWestjetParadise';
import VacationWestjetSecretResorts from './components/ComponentsVacation/VacationWestjet/VacationWestjetSecretResorts';
import VacationWestjetUpgrade from './components/ComponentsVacation/VacationWestjet/VacationWestjetUpgrade';
import VacationRoadtripsUltimate from './components/ComponentsVacation/VacationRoadtrips/VacationRoadtripsUltimate';
import VacationTravelLeadersSingapore from './components/ComponentsVacation/VacationTravelLeaders/VacationTravelLeadersSingapore';
import VacationFunjetHoneymoons from './components/ComponentsVacation/VacationFunjet/VacationFunjetHoneymoons';
import VacationCosmosTours from './components/ComponentsVacation/VacationCosmos/VacationCosmosTours';

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
          <meta http-equiv="refresh" content="0; URL=https://8751.vacation.escapevacations.ca/" />
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
            <Route path='/specials/norwegian-feelfree' element={<CruiseNorwegianFeelfree />} />
            <Route path='/specials/amawayerways-sail' element={<CruiseAmawaterwaysSail />} />
            <Route path='/specials/caribbean-sale' element={<CruiseCaribbeanSale />} />
            <Route path='/specials/sandals-curacao' element={<HotelSandalsCuracao />} />
            <Route path='/specials/westjet-vacation' element={<HotelWestjetVacation />} />
            <Route path='/specials/sandals-dunnriver' element={<HotelSandalsDunnRiver />} />
            <Route path='/specials/palace-vacation' element={<HotelPalaceVacation />} />
            <Route path='/specials/westjet-paradise' element={<HotelWestjetParadise />} />
            <Route path='/specials/westjet-secretresorts' element={<VacationWestjetSecretResorts />} />
            <Route path='/specials/westjet-upgrade' element={<VacationWestjetUpgrade />} />
            <Route path='/specials/roadtrips-ultimate' element={<VacationRoadtripsUltimate />} />
            <Route path='/specials/travelleaders-singapore' element={<VacationTravelLeadersSingapore />} />
            <Route path='/specials/funjet-honeymoons' element={<VacationFunjetHoneymoons />} />
            <Route path='/specials/cosmos-tours' element={<VacationCosmosTours />} />

            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <PageFooter />
        </Router>
      </div>
    </>
  );
}

export default App;
