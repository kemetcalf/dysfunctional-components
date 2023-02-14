import "./App.css";
import ModalButton from "./Components.js/no1Button.js";
import NavBar from "./Components.js/no3Nav";
import { Container, Row } from "react-bootstrap";

function App() {
	return (
		<Container className="AppWrap">
			<Row>
				<NavBar />
			</Row>
			<Row>
				<ModalButton />
			</Row>
			<Row>{/* <SpookyButton /> */}</Row>
		</Container>
	);
}

export default App;
