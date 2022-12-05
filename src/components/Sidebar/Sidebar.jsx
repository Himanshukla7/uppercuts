import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SideBarElements';

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>types</SidebarLink>
				<SidebarLink to='/'>Offer</SidebarLink>
				<SidebarLink to='/'>team</SidebarLink>
				<SidebarLink to='/'>Contacts</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/'>Book Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
}

export default Sidebar;
