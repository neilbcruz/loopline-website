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
                        <h6>"Loopline Travel is affiliated with:"</h6>
                        <h6>Nexion Travel Group - Canada, ULC</h6>
                        <h6>380 Wellington Street, Tower B, 6th Floor, London, ON N6A 5B5</h6>
                        <h6>HQ Phone 519-660-6966</h6>
                        <h6>TICO Reg. #1549342."</h6>
                        <br></br>
                        <h6>Loopline Travel. All Rights Reserved 2015</h6>
                    </div>
                </div>
            </div>
        </>
    )
}