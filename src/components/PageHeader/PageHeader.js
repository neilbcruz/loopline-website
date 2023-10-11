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
            </header>
        </>
    )
}