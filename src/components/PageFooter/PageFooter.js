import './PageFooter.scss';

// import { NavLink } from 'react-router-dom';

// import Facebook from '../../assets/icons/facebook.png';
// import Google from '../../assets/icons/googlemail.png';

export default function PageFooter() {
    // const newTab = url => {
    //     window.open(url, '_blank', 'noopener,noreferrer');
    // }

    return (
        <>
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__text'>
                        <h3>"Loopline Travel is affiliated with:"</h3>
                        <h3>Nexion Travel Group - Canada, ULC</h3>
                        <h3>380 Wellington Street, Tower B, 6th Floor, London, ON N6A 5B5</h3>
                        <h3>HQ Phone 519-660-6966</h3>
                        <h3>TICO Reg. #1549342."</h3>
                        <br></br>
                        <h3>Loopline Travel. All Rights Reserved 2015</h3>
                    </div>
                </div>
            </div>
        </>
    )
}