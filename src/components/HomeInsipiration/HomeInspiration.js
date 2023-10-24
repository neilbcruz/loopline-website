import {
    Container,
    Row,
    Image,
    Col
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Placeholder from '../../assets/images/image_placeholder.jpg';

export default function HomeInspiration() {
    return (
        <>
            <Container className='text-center'>
                <h2>DESTINATION INSPIRATION</h2>
                <p>Find your dream vacation. You can share your trip with your friends or contact an agent to make it happen!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/australia'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
            </Container>

            <Container className='text-center'>
                <h2>VACATION IDEAS</h2>
                <p>The best deals happening now. Act fast, they won't last long!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    )
}