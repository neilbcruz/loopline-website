import './HomePage.scss';

import { NavLink } from 'react-router-dom';

import LLTLogo from '../../assets/images/LLT_full-open.jpg';

export default function HomePage() {
    return (
        <>
            <div className='home'>
                <NavLink to='/'>
                    <img className='home__logo' src={LLTLogo} alt='Loopline Logo with plane and text of company name' />
                </NavLink>
                <h1>Loopline Travel page is under construction</h1>
            </div>
        </>
    )
}