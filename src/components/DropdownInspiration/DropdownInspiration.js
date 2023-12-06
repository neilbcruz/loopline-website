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
                <LinkContainer to='/inspiration/australia'>
                    <Dropdown.Item>Australia Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/italy'>
                    <Dropdown.Item>Italy Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/hawaii'>
                    <Dropdown.Item>Hawaii Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/nzealand'>
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
                <LinkContainer to='/inspiration/cruise'>
                    <Dropdown.Item>Why Choose A Cruise Vacation?</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/family'>
                    <Dropdown.Item>Family Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/wedding'>
                    <Dropdown.Item>Planning Your Wedding & Honeymoon</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/adventure'>
                    <Dropdown.Item>Adventure Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/wildlife'>
                    <Dropdown.Item>Wildlife & Safari Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/romantic'>
                    <Dropdown.Item>Romantic Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/golf'>
                    <Dropdown.Item>Golf Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/beach'>
                    <Dropdown.Item>Beach Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/european'>
                    <Dropdown.Item>European Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/rivercruise'>
                    <Dropdown.Item>River Cruise Vacations</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to='/inspiration/allinclusive'>
                    <Dropdown.Item>All Inclusive Vacations</Dropdown.Item>
                </LinkContainer>
            </DropdownButton>
        </Stack>
    </>
    )
}