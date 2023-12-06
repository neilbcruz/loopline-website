import { Container, Image, Row, Col } from 'react-bootstrap';

import CelebrityLogo from '../../assets/logo/CelebrityCruisesLogo.png';
import MSCCruisesLogo from '../../assets/logo/MSCCruisesLogo.png';
import RoyalCarribeanLogo from '../../assets/logo/RoyalCarribeanLogo.png';
import MarriottLogo from '../../assets/logo/MarriottLogo.png';
import ManulifeLogo from '../../assets/logo/ManulifeLogo.png';
import CosmosLogo from '../../assets/logo/CosmosLogo.png';
import GlobusLogo from '../../assets/logo/GlobusLogo.png';
import SunwingLogo from '../../assets/logo/SunwingLogo.png';
import TravelBrandsLogo from '../../assets/logo/TravelBrandsLogo.png';

import CarnivalChooseFun from '../../assets/images/carnival-choose-fun_banner.jpg';

export default function TravelLeadersLogos() {
    return (
        <>
            <Container className='mb-5'>
                <Row>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={CelebrityLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={MSCCruisesLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={RoyalCarribeanLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={MarriottLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={ManulifeLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={CosmosLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={GlobusLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={SunwingLogo} className='logo-image' />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={TravelBrandsLogo} className='logo-image' />
                    </Col>
                </Row>
                <Row>
                    <Image
                        src={CarnivalChooseFun}
                    />
                </Row>
            </Container>
        </>
    );
}
