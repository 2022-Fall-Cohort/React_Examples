import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TestModal from './TestModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState(() => {
    return;
  });

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  console.log(inputText);

  const showModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <Button onClick={showModal}>Display Modal</Button>
      </div>

      <TestModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inputText={inputText}
        setInputText={setInputText}
      />
    </>
  );
}

export default App;
