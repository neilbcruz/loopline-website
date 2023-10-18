import {
    Container,
    Button,
    Row,
    Col,
    Image,
    Card
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

import Expertise from '../../assets/icons/operator.png';
import PService from '../../assets/icons/handshake.png';
import Value from '../../assets/icons/handmoney.png';
import Rowena from '../../assets/images/rowena.jpeg';

export default function PageBody() {
    return (
        <>
            <Container className='text-center mb-5'>
                <h1>YOUR EXTRAORDINARY VACATION BEGINS HERE</h1>
                <p>No matter where in the world you want to go, we can help get you there. Our experienced agents will take the time to answer your questions and listen to your ideas, before making expert recommendations that fit your budget. We believe extraordinary vacations begin with careful planning, that's why we are devoted to ensuring our clients always have the best possible experience—both before they leave and while they're away.</p>
                <NavLink to='/contact'>
                    <Button variant='success'>Contact Us</Button>
                </NavLink>
            </Container>

            <Container className='text-center bg-secondary bg-opacity-25 py-3 mb-5' fluid>
                <Container>
                    <Row className='mb-2'>
                        <h1>WHAT MAKES US SPECIAL?</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Image
                                src={Expertise}
                                alt='operator with headset'
                                width='40%'
                                fluid
                            />
                            <h2>EXPERTISE</h2>
                            <p>We have the knowledge and experience to make your vacation dreams a reality.</p>
                        </Col>
                        <Col>
                            <Image
                                src={PService}
                                alt='hand only shake'
                                width='40%'
                                fluid
                            />
                            <h2>PERSONAL SERVICE</h2>
                            <p>We go above and beyond to ensure your vacation exceeds all your expectations.</p>
                        </Col>
                        <Col>
                            <Image
                                src={Value}
                                alt='hand and money on top of palm'
                                width='40%'
                                fluid
                            />
                            <h2>VALUE</h2>
                            <p>We save you time and money by cutting through the clutter to find the best value.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='text-center'>
                <h1>Meet Rowena</h1>
                <Card style={{ color: 'black' }}>
                    <Container>
                        <Image
                            src={Rowena}
                            alt='Rowena image'
                            width='40%'
                            className='mt-3'
                        />
                    </Container>
                    <Card.Body>
                        <Card.Title>
                            Rowena Cruz
                        </Card.Title>
                        <Card.Text>
                            CERTIFIED TRAVEL COUNSELLOR
                        </Card.Text>
                        <Button variant='primary'>Email me</Button>
                        <Button variant='primary'>Call me</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}