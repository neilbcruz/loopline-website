import {
    Container,
    Row,
    Col,
    Button,
    Alert,
    Breadcrumb,
    Card,
    Form,
    Stack,
    FloatingLabel,
    ThemeProvider,
    Dropdown,
    DropdownButton,
    Accordion,
    AccordionContext,
    Badge,
    ButtonGroup,
    ButtonToolbar,
    Carousel,
    Image
} from 'react-bootstrap';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import LLTLogo1 from '../../assets/images/LLT_bold-open.jpg';
import LLTLogo2 from '../../assets/images/LLT_bold-close.jpg';

import { useState, useContext } from 'react';

export default function InspirationPage() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
    }

    const [show, setShow] = useState(true);

    // Accordion function for button click //
    const PINK = 'rgba(255, 192, 203, 0.6)';
    const BLUE = 'rgba(0, 0, 255, 0.6)';

    function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <button
                type="button"
                style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    return (
        <>
            <div>
                <div className='inspiration'>
                    <h1>Text Colours with Regular Bootstrap</h1>
                    <p className="text-muted">This text is muted.</p>
                    <p className={`text-dark bg-success`}>This text is important.</p>
                    <p class="text-success">This text indicates success.</p>
                    <p class="text-info">This text represents some information.</p>
                    <p class="text-warning">This text represents a warning.</p>
                    <p class="text-danger">This text represents danger.</p>
                </div>

                <Container className='my-5'>
                    <h1>Buttons</h1>
                    <Stack direction="horizontal" gap={2} className='mb-2'>
                        <Button as="a" variant="primary">
                            Button as link
                        </Button>
                        <Button as="a" variant="success">
                            Button as link
                        </Button>
                    </Stack>
                    <ButtonToolbar>
                        <ButtonGroup size='sm' className='me-1'>
                            <Button variant='secondary'>1</Button>
                            <Button variant='secondary'>2</Button>
                        </ButtonGroup>
                        <ButtonGroup className='me-1'>
                            <Button variant='secondary'>3</Button>
                            <DropdownButton as={ButtonGroup} title='4'>
                                <Dropdown.Item eventKey='1'>Item 1</Dropdown.Item>
                                <Dropdown.Item eventKey='2'>Item 2</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Container>

                <Container className='my-5'>
                    <h1>Alerts w/ Regular Bootstrap vs react-Bootstrap</h1>
                    <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                        <strong>Oh snap! You got an error!</strong>
                        <p>Change this and that and try again.</p>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Alert dismissible variant="danger">
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>Change this and that and try again.</p>
                    </Alert>
                    <Alert show={show} variant="success">
                        <Alert.Heading>My Alert</Alert.Heading>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me
                            </Button>
                        </div>
                    </Alert>
                    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                    {[
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            This is a {variant} alert with {' '}
                            <Alert.Link href='https://8751.vacation.escapevacations.ca/' target='_blank'>Loopline!</Alert.Link>
                        </Alert>
                    ))}
                </Container>

                <Container className='my-5'>
                    <h1>Stack and Themeprovider with breakpoints</h1>
                    <Stack direction='horizontal'>
                        <ThemeProvider
                            prefixes={{ btn: 'my-btn' }}
                            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                            minBreakpoint="xxs"
                        >
                            <Button className='p-1' variant="primary">My Button</Button>
                        </ThemeProvider>
                        <Button className='p-1' bsPrefix="super-btn" variant="primary">
                            Super button
                        </Button>
                    </Stack>
                </Container>


                <Container fluid='xl' className='my-5'>
                    <h1>Stack and Dropdown Items</h1>
                    <Stack direction="horizontal" gap={3}>
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            title="Light dropdown"
                            className="mt-2"
                            data-bs-theme="light"
                        >
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            title="Dark dropdown"
                            className="mt-2"
                            data-bs-theme="dark"
                        >
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </Stack>
                </Container>

                <Container className='my-5'>
                    <h1>Form Example with Validation</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row >
                            <Col className='mb-2'>
                                <Form.Group
                                    // ControlId='formEmail'
                                    ControlId='formPlaintextEmail'
                                >
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type='email' placeholder='example@email.com' required />
                                    {/* <Form.Control plaintext readOnly defaultValue='email@example.com' /> */}
                                    <Form.Control.Feedback type='invalid'>
                                        Please provide your e-mail
                                    </Form.Control.Feedback>
                                    <Form.Text className='text-muted'>
                                        We'll never share your email
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col className='mb-2'>
                                <Form.Group
                                    ControlId='formPassword'
                                >
                                    <Form.Label htmlFor='inputPassword5'>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type='password'
                                        placeholder='password'
                                        id='inputPassword5' // only if it's not in a form group //
                                        aria-describedby='passwordHelpBlocl' // to connect to form text if not in form group //
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Please enter your password
                                    </Form.Control.Feedback>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-20 characters long, contain letters and numbers,
                                        and must not contain spaces, special characters, or emoji.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Form.Group className='mb-2'>
                                <Form.Label >Disabled select menu</Form.Label>
                                <Form.Select aria-label="Default select example" size='sm'>
                                    <option>Open this select menu</option>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3' active>Option 3</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-2'>
                                <Form.Label>Express your thoughts</Form.Label>
                                <Form.Control as='textarea' placeholder='Type here' rows={3} size='xs' required />
                                <Form.Control.Feedback>
                                    Thanks for sharing your thoughts
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    Please share your thoughts
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="small text"
                            aria-label='Example of form control'
                            className='mb-2'
                            readOnly
                        />
                        <Form.Group controlId="formFile" className="mb-2">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-2">
                            <Form.Label>Multiple files input example</Form.Label>
                            <Form.Control type="file" multiple size='sm' />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                            <Form.Control
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Choose your color"
                            />
                        </Form.Group>
                        <Form.Group>
                            {['checkbox', 'radio', 'switch'].map((type) => (
                                <div key={`${type}`} className="mb-2" // default or inline or reverse //
                                >
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}-1`}
                                        label={`default ${type} 1`} // you can remove label to just have the buttons //
                                        name='example group' // make sure all have same group name //
                                        input='isValid'
                                    />
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}-2`}
                                        label={`default ${type} 2`}
                                        name='example group'
                                        input='isValid'
                                    />
                                    <Form.Check
                                        disabled
                                        type={type}
                                        label={`disabled ${type}`}
                                        id={`disabled-default-${type}-3`}
                                        name='example group'
                                        input='isValid'
                                    />
                                </div>
                            ))}
                        </Form.Group>
                        <Form.Group>
                            {['checkbox', 'radio'].map((type) => (
                                <div key={type} className="mb-2">
                                    <Form.Check type={type} id={`check-api-${type}-1`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label>{`Custom api ${type} 1`}</Form.Check.Label>
                                        <Form.Control.Feedback>
                                            You did it!
                                        </Form.Control.Feedback>
                                    </Form.Check>
                                </div>
                            ))}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Check
                                required
                                type='checkbox'
                                label='Agree to terms and conditions'
                                className='text-success'
                                feedback='You must agree before submitting'
                                feedbackType='invalid'
                            />
                        </Form.Group>
                        <Button type='submit'>Submit Form</Button>
                    </Form>
                </Container>

                <Container className='my-5'>
                    <h1>Row and Column with Forms</h1>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-2"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <FloatingLabel className="mb-2" controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-2" controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Container>

                <Container className='my-5'>
                    <h1>Breadcrumb/Navigation hierarchy</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item href='#'>Test 1</Breadcrumb.Item>
                        <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/' target='_blank'>Test 2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>

                <Container className='my-5'>
                    <h1>Card</h1>
                    <Card style={{ color: 'red' }}>
                        <Card.Img className='my-1' src={LLTLogo1} />
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
                </Container>

                <Container className='my-5'>
                    <h1>Accordion</h1>
                    <Accordion
                        // defaultActiveKey='0' // can remove to keep collapsed on page load
                        // alwaysOpen // can open multiple accordions at once //
                        flush // remove the border //
                    >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Hello! I am the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>

                <Container className='my-5'>
                    <h1>Badge matches the size of immediate parent with font sizing
                        <hr ></hr>
                    </h1>
                    <div>
                        <h1>
                            Example heading <Badge bg="secondary">New</Badge>
                        </h1>
                        <h2>
                            Example heading <Badge bg="secondary">New</Badge>
                        </h2>
                        <h3>
                            Example heading <Badge bg="secondary">New</Badge>
                        </h3>
                        <h4>
                            Example heading <Badge bg="secondary">New</Badge>
                        </h4>
                        <h5>
                            Example heading <Badge bg="secondary">New</Badge>
                        </h5>
                        <h6>
                            Example heading <Badge bg="secondary">New</Badge>
                        </h6>
                        <Button variant='primary' className='mb-2'>
                            Profile <Badge bg='danger'>9</Badge>
                        </Button>
                        <Stack direction='horizontal' gap={2}>
                            <Badge bg='primary'>Primary</Badge>
                            <Badge bg='warning'>Warning</Badge>
                            <Badge pill bg='dark'>Dark</Badge>
                        </Stack>
                    </div>
                </Container>

                <Container>
                    <h1>Carousel</h1>
                    <Carousel>
                        <Carousel.Item itemId={1}>
                            <Image src={LLTLogo1} text="First slide" className='w-100 d-block' />
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                        <Carousel.Item itemId={2}>
                            <Image src={LLTLogo2} text="Second slide" className='w-100 d-block' />
                            <h5>Second slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </>
    )
}