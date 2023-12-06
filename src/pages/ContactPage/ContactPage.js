import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Alert
} from 'react-bootstrap';

import { useState } from 'react';
import emailjs from 'emailjs-com';

import PageHero from '../../components/PageHero/PageHero';
import CardRowena from '../../components/CardRowena/CardRowena';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Data information for EmailJS template
        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        // EmailJS
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
        )
            .then((response) => {
                console.log('Email sent!', response.status, response.text);
                setShowSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <>
            <PageHero />

            <CardRowena />

            <Container>
                <Row className='my-3 text-center'>
                <h1>Contact Us</h1>
                <h6>Looking for advice or information on an upcoming trip? Let us know if you have any questions!</h6>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <Form onSubmit={handleSubmit} className='text-left'>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className='mb-2' controlId='firstName'>
                                        <Form.Label className='mb-0'>First Name<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter first name'
                                            name='firstName'
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className='mb-2' controlId='lastName'>
                                        <Form.Label className='mb-0'>Last Name<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter last name'
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId='email' className='mb-2'>
                                <Form.Label className='mb-0'>Email Address<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId='phone' className='mb-2'>
                                <Form.Label className='mb-0'>Phone Number</Form.Label>
                                <Form.Control
                                    type='tel'
                                    placeholder='Enter phone number'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId='message' className='mb-2'>
                                <Form.Label className='mb-0'>Message<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={4}
                                    placeholder='Enter your message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button variant='success' type='submit' className='px-4'>
                                Send
                            </Button>
                        </Form>
                        {showSuccess && (
                            <Alert variant='success' onClose={() => setShowSuccess(false)} dismissible>
                                Form submitted successfully!
                            </Alert>
                        )}
                    </Col>
                </Row>
                <Row>
                    <p className='text-danger fst-italic'>* required</p>
                </Row>
            </Container>
        </>
    )
}