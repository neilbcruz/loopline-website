// import './PageHero.scss';
import LLTLogo from '../../assets/images/LLT_text.jpg'

import { Container, Image } from 'react-bootstrap';

export default function PageHero() {
    return (
        <>
        <Container>
            <Image src={LLTLogo} className='bg-dark' fluid />
        </Container>
        </>
    )
}