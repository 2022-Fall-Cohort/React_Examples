import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import TestModal from './TestModal';

export default function App() {
  const [promotion, setPromotion] = useState('q');

  useEffect(() => {
    console.log(promotion);
  }, [promotion]);

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button onClick={showModal}>Display Modal</Button>

      <TestModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        promotion={promotion}
        setPromotion={setPromotion}
      />
    </>
  );
}
