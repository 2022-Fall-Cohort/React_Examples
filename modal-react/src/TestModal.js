import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function TestModal(props) {
  console.log(props);
  if (!props.isOpen) {
    return null;
  }

  var isOpen = props.isOpen;
  var setIsOpen = props.setIsOpen;
  var inputText = props.inputText;
  var setInputText = props.setInputText;

  const hideModal = () => {
    setIsOpen(false);
  };

  function handleChange(e) {
    e.preventDefault();

    setInputText(e.target.value);
  }

  function save(e) {
    e.preventDefault();

    hideModal();

    setInputText(e.target.value);

    console.log(inputText, e.target.value);
  }

  return (
    <>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Please enter some text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Test Input"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
          <Button onClick={save}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
