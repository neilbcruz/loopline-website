import {
    Stack,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export default function DropdownSpecial() {
    return (
        <>
            <Stack direction="horizontal" className='display-flex justify-content-center align-items-center gap-1 gap-xl-5 gap-md-3 gap-sm-1'>
                <DropdownButton
                    id="dropdown-cruise"
                    variant="secondary"
                    title="Cruises"
                    className="mt-2"
                    data-bs-theme="light"
                >
                    <LinkContainer to='/about'>
                        <Dropdown.Item>Silversea Cruises</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/inspiration'>
                        <Dropdown.Item>Avalon Waterways</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/bootstrap'>
                        <Dropdown.Item>Holland America Line</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Royal Caribbean</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Norwegian Cruise listen</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Amawaterways</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Celebrity Cruises</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Seabourn</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Virgin Voyages</Dropdown.Item>
                    </LinkContainer>
                </DropdownButton>
                <DropdownButton
                    id="dropdown-hotels"
                    variant="secondary"
                    title="Hotels"
                    className="mt-2"
                    data-bs-theme="light"
                >
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Sandals Resorts</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Palace Resorts</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Westjet Vacations</Dropdown.Item>
                    </LinkContainer>
                </DropdownButton>
                <DropdownButton
                    id="dropdown-vacations"
                    variant="secondary"
                    title="Vacations"
                    className="mt-2"
                    data-bs-theme="light"
                >
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Roadtrips Sports Travel</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Westjet Vacations</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Globus</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Funjet Vacations</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Cosmos</Dropdown.Item>
                    </LinkContainer>
                </DropdownButton>
                <DropdownButton
                    id="dropdown-rails"
                    variant="secondary"
                    title="Rails"
                    className="mt-2"
                    data-bs-theme="light"
                >
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                </DropdownButton>
            </Stack>
        </>
    )
}