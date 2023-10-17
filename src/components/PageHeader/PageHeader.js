import './PageHeader.scss';
import { NavLink } from 'react-router-dom';

import LLTIcon from '../../assets/images/LLT_full-open.jpg';

export default function PageHeader() {
    return (
        <>
            <header className='header'>
                <div className='header__top'>
                    <NavLink className='header__top-img' to='/'>
                        <img className='header__top-logo' src={LLTIcon} alt='Loopline Logo with plane and text of company name' />
                    </NavLink>
                </div>
                <div className='header__nav'>
                    <NavLink to='/'>
                        <h6>Home</h6>
                    </NavLink>
                    <NavLink to='/inspiration'>
                        <h6>Inspiration</h6>
                    </NavLink>
                    <NavLink to='/specials'>
                        <h6>Specials</h6>
                    </NavLink>
                    <NavLink 
                    to='https://www.igoinsured.com/Direct/ManulifeGlobal.aspx?ag=NEXILON&lang=E'
                    target='_blank'
                    >
                        <h6>Travel Insurance</h6>
                    </NavLink>
                    <NavLink to='/bootstrap'>
                        <h6>Bootstrap</h6>
                    </NavLink>
                </div>
            </header>
        </>
    )
}