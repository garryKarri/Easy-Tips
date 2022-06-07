import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function addPropsToReactElement(children, props) {
  if (!children) return null;
  if (Array.isArray(children)) throw Error('Ожидался 1 элемент');
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...props, ...children.props });
  }
  return children;
}

function MyModalCor({ children, el }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        {children}
      </span>

      <Modal show={show} onHide={handleClose}>
        {addPropsToReactElement(el, { modalClose: handleClose })}
      </Modal>
    </>
  );
}

export default MyModalCor;
