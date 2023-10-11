import './HomePage.scss';

import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

import LLTLogo from '../../assets/images/LLT_full-open.jpg';

export default function HomePage() {
    return (
        <>
            <div className='home'>
                <NavLink to='/'>
                    <img className='home__logo' src={LLTLogo} alt='Loopline Logo with plane and text of company name' />
                </NavLink>
                <p className="text-muted">This text is muted.</p>
                <p className={`text-dark bg-success`}>This text is important.</p>
                <p class="text-success">This text indicates success.</p>
                <p class="text-info">This text represents some information.</p>
                <p class="text-warning">This text represents a warning.</p>
                <p class="text-danger">This text represents danger.</p>

                <figure className='text-center' style={{ color: 'red' }}>
                    <blockquote class="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>

                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                        <span class="sr-only">50% Complete</span>
                    </div>
                </div>

                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group ControlId='formEmail'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type='email' placeholder='example@email.com' />
                                    <Form.Text className='text-muted'>
                                        We'll never share your email
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='mb-2'>
                                    <Form.Label ControlId='formPassword'>Password</Form.Label>
                                    <Form.Control type='password' placeholder='password' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant='secondary' type='submit'>Login</Button>
                    </Form>
                    <Breadcrumb>
                        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card className='mb-3' style={{ color: 'red' }}>
                        <Card.Img src={LLTLogo} />
                        <Card.Body>
                            <Card.Title>
                                Card Example
                            </Card.Title>
                            <Card.Text>
                                This is an example cards
                            </Card.Text>
                            <Button variant='primary'>Read more</Button>
                        </Card.Body>
                    </Card>
                    <Alert variant='success'>This is Alert</Alert>
                    <Button>Test Button</Button>
                </Container>
            </div >
        </>
    )
}