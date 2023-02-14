import Button from "react-bootstrap/esm/Button";
import AboutModal from "./no2Modal";
import { useState } from "react";
import SpookyButton from "./no4SpookyButton";

function ModalButton() {
	const [modalShow, setModalShow] = useState(false);
	const [showButton, setShowButton] = useState(false);

	return (
		<div className="ModalButton w-25 mx-auto">
			<Button
				active
				variant="primary"
				size="lg"
				onClick={() => setModalShow(true) && setShowButton(true)}
				className="my-5 align-self-center"
			>
				Big Button
			</Button>
			<AboutModal show={modalShow} onHide={() => setModalShow(false)} />
			<SpookyButton show={showButton} />
		</div>
	);
}

export default ModalButton;
