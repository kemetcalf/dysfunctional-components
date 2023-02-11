import Button from "react-bootstrap/esm/Button";
import AboutModal from "./no2Modal";
import { useState } from "react";

function ModalButton() {
	const [modalShow, setModalShow] = useState(false);

	return (
		<div className="ModalButton">
			<div className="my-2">
				<Button
					active
					variant="primary"
					size="lg"
					onClick={() => setModalShow(true)}
				>
					Big Button
				</Button>

				<AboutModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>
		</div>
	);
}

export default ModalButton;
