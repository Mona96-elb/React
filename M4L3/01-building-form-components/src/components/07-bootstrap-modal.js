import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function UseBootstrapModal07() {

    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);

    const onSave = (e) => {
      console.log('onSave invoked');
    }

    const onUndo = (e) => {
      console.log('onUndo invoked');
    }

    return (
      <>
      <p>This is an example of using Bootstrap demo Modal, broken up into a BootstrapModal component and a 
        UseBootstrapModal component</p>
     
      <Button variant="primary" onClick={showModal}>Launch Modal component</Button>
      <BootstrapModal07 show={show} setShow={setShow} onSave={onSave} onUndo={onUndo}/>
    </>
    );
  }

export function BootstrapModal07(props) {

  const onSave = (e) => {
    props.setShow(false);

    props.onSave(e);
  }

  const onUndo = (e) => {
    props.setShow(false);

    props.onUndo(e);
  }

  return (
    <>
    <Modal
      show={props.show}
      onHide={onUndo}
      backdrop="static"
      keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onUndo}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
}