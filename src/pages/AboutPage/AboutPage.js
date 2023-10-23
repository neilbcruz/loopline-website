import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Stack,
    Image
} from 'react-bootstrap';

import Rowena from '../../assets/images/rowena.jpeg';

export default function HomePage() {
    const email = 'email@example.com';
    const phone = '+1234567890';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${phone}`
    }

    return (
        <>
            <Container className='my-5'>
                <Card variant='secondary' style={{ background: 'secondary' }}>
                    <Row>
                        <Col>
                            <Card.Img src={Rowena} alt='Rowena image' className='my-3 ms-3' />
                        </Col>
                        <Col className='text-align-left my-3 me-3'>
                            <Card.Title>ROWENA CRUZ</Card.Title>
                            <Card.Text className='mb-1'>Scarborough, ON</Card.Text>
                            <hr className='mt-1 mb-4'></hr>
                            <Stack direction='horizontal' gap={2}>
                                <Button variant='success' onClick={handleEmailClick}>Email Me</Button>
                                <Button variant='success' onClick={handlePhoneClick}>Call Me</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Card>
            </Container>

            <Container className='mb-5'>
                <h2>Certified Travel Counsellor</h2>
                <Row>
                    <Col xs={12} md={6}>
                        <p>
                            My passion to traveling made me decide to become a travel consultant. I have studied and received certification to be a Travel Consultant.

                        </p>
                        <p>
                            Aside from education, I have travelled to different places and will continue to travel. I am very passionate when it comes to travelling all over the world. My desire to see the world and experience its many different cultures has allowed me to start my dream by first touring some cities in the United States, as well as my new home, Canada. From there, my desire grew and led me to countries beyond North America such as Hongkong, Austria, Czech Republic, Italy, France, London, Greece, Japan, Korea, Philippines, and there is no sign of me stopping any time soon. I've also done river cruising in Paris and ocean cruising in the Caribbean.
                        </p>
                        <p>
                            I hope to share my passion with everyone else; utilizing it to provide other travelers with high quality services that will help them make the most out of their travels around the world.
                        </p>
                        <p>
                            Loopline Travel is affiliated with Nexion Travel Group, 100-235 North Centre Rd, London, On  N5X 4E7 HQ Phone 5196606966  TICO Reg # 1549342
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image
                            src={Rowena}
                            className='my-2' />
                    </Col>
                </Row>



            </Container>
        </>
    )
}