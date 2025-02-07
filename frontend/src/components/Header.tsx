import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../assets/logo.png"

const Header = () => {
	const { items } = useSelector((state: any) => state.cart);
	console.log(items);
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<img src={logo} alt="ProShop" />ProShop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link><FaShoppingCart /> Cart {items.length > 0 && (
									<Badge pill>{items.reduce((acc, item) => acc + Number(item.quantity), 0)}</Badge>
								)}</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link><FaUser /> Log In</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header