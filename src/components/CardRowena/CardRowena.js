import './CardRowena.scss';

import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Stack,
    Image
} from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

import RowenaImage from '../../assets/images/rowena.jpeg';

export default function CardRowena() {
    const email = 'Rowena@looplinetravel.com';
    const phone = '+16475199708';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${phone}`
    }

    return (
        <>
            <Container className='mb-3'>
                <Card variant='secondary' className='custom-card'>
                    <Card.Body>
                        <Row className='d-flex align-items-center justify-content-center'>
                            <Col>
                                <Image
                                    src={RowenaImage}
                                    alt='Rowena image'
                                    className='my-3 custom-fluid-card'
                                    width='100%'
                                    height='100%'
                                />
                            </Col>
                            <Col className='text-align-left m-3 ' xs={6} lg={7}>
                                <Card.Title>ROWENA CRUZ</Card.Title>
                                <Card.Text className='mb-0'>Scarborough, ON</Card.Text>
                                <hr className='mt-0'></hr>
                                <p className='fw-light'>Certified Travel Counsellor</p>
                                <p className='d-none d-md-block'>My passion to traveling made me decide to become a travel consultant. I have studied and received certification to be a Travel Consultant.</p>
                                <HashLink to='/about' className='text-decoration-none'>
                                    <p className='mb-2 text-success'>Click here to learn more about me</p>
                                    </HashLink>
                                <Stack direction='horizontal' gap={2}>
                                    <Button variant='success' onClick={handleEmailClick}>Email Me</Button>
                                    <Button variant='success' onClick={handlePhoneClick}>Call Me</Button>
                                </Stack>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}