import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import PageFooter from './components/PageFooter/PageFooter';

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
          </Routes>
          <PageFooter />
        </Router>
      </div>
    </>
  );
}

export default App;
