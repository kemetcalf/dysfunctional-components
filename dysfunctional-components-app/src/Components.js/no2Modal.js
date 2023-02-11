import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

function AboutModal(props) {
	return (
		<div className="">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<h3>Welcome to Dysfunctional Components</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Where I'm making a component a day,</h4>
					<p>
						no matter how smol. Please feel free to have a look around and
						interact with things.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close it up</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default AboutModal;
