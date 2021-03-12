import { Modal as BModal } from "react-bootstrap";

export default function Modal(props) {
  return (
    <BModal
      show={props.show}
      onHide={() => props.closeModal()}
      dialogClassName="modal-100wh"
      scrollable
      className="fullscreen-modal"
    >
      <BModal.Header closeButton>
        <BModal.Title>{props.title}</BModal.Title>
      </BModal.Header>
      <BModal.Body>{props.children}</BModal.Body>
    </BModal>
  );
}
