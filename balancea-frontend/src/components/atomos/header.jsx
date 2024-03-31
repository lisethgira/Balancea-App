import { useState } from 'react';

import logo from '../../assets/Landing/logo.svg';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../styles/common';
import hamburger from '../../assets/Landing/icon-hamburger.svg';
import close from '../../assets/Landing/icon-close.svg';

import styled from 'styled-components';

export const Navigation = styled.header`
	width: 100%;
	overflow: hidden;
	background-color: var(--White);
	z-index: 999;
	position: relative;
	@media (max-width: 600px) {
		overflow: visible;
	}
`;
export const Nav = styled.nav`
	padding: 3rem 0;
	display: flex;
	justify-content: space-between;
	.hamburger {
		max-width: 3rem;
		display: none;
	}

	@media (max-width: 600px) {
		button {
			display: none;
		}
		.hamburger {
			display: block;
		}
	}

	ul.active {
		display: block;
	}
`;
export const Ul = styled.ul`
	display: flex;
	width: 25%;
	justify-content: space-between;
	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
		position: absolute;
		top: 100px;
		background-color: #fff;
		display: none;
		padding: 4rem 0;
		text-align: center;
	}
`;
export const Li = styled.li`
	padding: 1rem 0;
`;
export const Logo = styled.div``;

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div>
			<Container>
				<Navigation>
					<Nav>
						<Logo>
							<img src={logo} alt='logo' />
						</Logo>
						<Ul className={open ? `active` : `navlinks`}>
							<Li>
								<Link to={`#`}>Home</Link>
							</Li>
							<Li>
								<Link to={`#`}>About</Link>
							</Li>
							<Li>
								<Link to={`#`}>Contact</Link>
							</Li>
							<Li>
								<Link to={`#`}>Bank</Link>
							</Li>
							<Li>
								<Link to={`#`}>Career</Link>
							</Li>
						</Ul>
						<Button>Request Invite</Button>
						<img
							src={open ? close : hamburger}
							className='hamburger'
							alt=''
							onClick={handleClick}
						/>
					</Nav>
				</Navigation>
			</Container>
		</div>
	);
};

export default Header;