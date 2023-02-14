import Nav from "react-bootstrap/Nav";

function NavBar() {
	return (
		<Nav>
			<Nav.Item>
				<Nav.Link href="/home">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="">More Components</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey=""></Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default NavBar;
