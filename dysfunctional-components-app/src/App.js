import "./App.css";
import ModalButton from "./Components.js/no1Button.js";
import { Container, Row } from "react-bootstrap";

function App() {
	return (
		<Container className="d-flex h-100">
			<Row className="align-self-center">
				<ModalButton />
				{/* TODO: CENTER BUTTON */}
			</Row>
		</Container>
	);
}

export default App;
