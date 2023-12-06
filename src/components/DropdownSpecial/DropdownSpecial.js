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
                    <LinkContainer to='/specials/silversea-fares'>
                        <Dropdown.Item>Silversea Cruises</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/norwegian-adventure'>
                        <Dropdown.Item>Norwegian Cruise Line - 1</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/norwegian-vacation'>
                        <Dropdown.Item>Norwegian Cruise Line - 2</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/norwegian-feelfree'>
                        <Dropdown.Item>Norwegian Cruise Line - 3</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/crystal-solo'>
                        <Dropdown.Item>Crystal</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/holland-haveitall'>
                        <Dropdown.Item>Holland America Line - 1</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/holland-youcanhave'>
                        <Dropdown.Item>Holland America Line - 2</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/caribbean-icon'>
                        <Dropdown.Item>Royal Caribbean - 1</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/caribbean-sale'>
                        <Dropdown.Item>Royal Caribbean - 2</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/amawayerways-river'>
                        <Dropdown.Item>Amawaterways - 1</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/amawayerways-sail'>
                        <Dropdown.Item>Amawaterways - 2</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/celebrity-resort'>
                        <Dropdown.Item>Celebrity Cruises - 1</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/celebrity-getaway'>
                        <Dropdown.Item>Celebrity Cruises - 2</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/travelleaders-elevate'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/seabourn-destinations'>
                        <Dropdown.Item>Seabourn</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/vvoyages-luxury'>
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
                    <LinkContainer to='/specials/sandals-curacao'>
                        <Dropdown.Item>Sandals Resorts - Curaçao</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/sandals-dunnriver'>
                        <Dropdown.Item>Sandals Resorts - Dunn River</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/palace-vacation'>
                        <Dropdown.Item>Palace Resorts</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/westjet-vacation'>
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
                    <LinkContainer to='/specials/roadtrips-ultimate'>
                        <Dropdown.Item>Roadtrips Sports Travel</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/westjet-secretresorts'>
                        <Dropdown.Item>Westjet Vacations - 1</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/westjet-upgrade'>
                        <Dropdown.Item>Westjet Vacations - 2</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/travelleaders-singapore'>
                        <Dropdown.Item>Travel Leaders Travel Partners - Singapore</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/funjet-honeymoons'>
                        <Dropdown.Item>Funjet Vacations</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/specials/cosmos-tours'>
                        <Dropdown.Item>Cosmos</Dropdown.Item>
                    </LinkContainer>
                </DropdownButton>
                {/* <DropdownButton
                    id="dropdown-rails"
                    variant="secondary"
                    title="Rails"
                    className="mt-2"
                    data-bs-theme="light"
                >
                    <LinkContainer to='/contact'>
                        <Dropdown.Item>Travel Leaders Travel Partners</Dropdown.Item>
                    </LinkContainer>
                </DropdownButton> */}
            </Stack>
        </>
    )
}