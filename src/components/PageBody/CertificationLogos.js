import { Container, Image, Row, Col } from 'react-bootstrap';

import CertifiedTravel from '../../assets/logo/certification_logos/CTC-Full-SignatureLogo.png';
import Cert1 from '../../assets/logo/certification_logos/TravelLeadersCert.png';
import Cert2 from '../../assets/logo/certification_logos/IATANCert.png';
import Cert3 from '../../assets/logo/certification_logos/TravelFathomCert.png';
import Cert4 from '../../assets/logo/certification_logos/TravelLeisureCert.png';
import Cert5 from '../../assets/logo/certification_logos/WorldTravelCert.png';

export default function TravelLeadersLogos() {
    return (
        <>
            <Container className='mb-5'>
                <Row>
                    <Image
                        src={CertifiedTravel}
                    />
                </Row>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={6} md={3} lg={2}>
                        <Image src={Cert1} className='logo-image' />
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <Image src={Cert2} className='logo-image' />
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <Image src={Cert3} className='logo-image' />
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <Image src={Cert4} className='logo-image' />
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <Image src={Cert5} className='logo-image' />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
