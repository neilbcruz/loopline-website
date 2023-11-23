import {
    Container,
    Button
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import HomeInspiration from '../../components/InspirationHome/InspirationHome';

export default function InspirationPage() {
    // Scroll-to-Top functions //
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Container  id='top' className='link_style text-center my-3'>
                <NavLink to='/inspiration'>
                    <h1>Travel Inspiration</h1>
                </NavLink>
            </Container>

            <HomeInspiration />

            <Container className="scroll-to-top">
                {showButton && (
                    <Button variant='light' onClick={scrollToTop} size='sm' className='position-fixed bottom-0 end-0 opacity-75'>
                        <ArrowUp />
                    </Button>
                )}
            </Container>
        </>
    )
}