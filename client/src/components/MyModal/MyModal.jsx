import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

function MyModal({
  children, el, flag, setFlag,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(flag);
    setFlag(false);
  }, [flag]);
  return (
    <>
      <span onClick={handleShow}>
        {children}
      </span>

      <Modal show={show} onHide={handleClose}>
        {el}
      </Modal>
    </>
  );
}

export default MyModal;
