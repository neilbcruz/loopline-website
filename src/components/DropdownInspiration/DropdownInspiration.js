import {
    Stack,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export default function DropdownInspiration() {
    return (
<>
        <Stack direction="horizontal" className='display-flex justify-content-center align-items-center gap-1 gap-xl-5 gap-md-3 gap-sm-1'>
            <DropdownButton
                id="dropdown-locations"
                variant="secondary"
                title="Locations"
                className="mt-2"
                data-bs-theme="light"
            >
                <LinkContainer to='/about'>
                    <Dropdown.Item>Australia Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration'>
                    <Dropdown.Item>Italy Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/bootstrap'>
                    <Dropdown.Item>Hawaii Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>New Zealand Vacations</Dropdown.Item>
                </LinkContainer>
            </DropdownButton>
            <DropdownButton
                id="dropdown-ideas"
                variant="secondary"
                title="Ideas"
                className="mt-2"
                data-bs-theme="light"
            >
                <LinkContainer to='/about'>
                    <Dropdown.Item>Why Choose A Cruise Vacation?</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration'>
                    <Dropdown.Item>Family Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/bootstrap'>
                    <Dropdown.Item>Planning Your Wedding & Honeymoon</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>Adventure Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>Wildlife & Safari Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>Romantic Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>Golf Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>Beach Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>European Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>Family Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>River Cruise Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Dropdown.Item>All Inclusive Vacations</Dropdown.Item>
                </LinkContainer>
            </DropdownButton>
        </Stack>
    </>
    )
}