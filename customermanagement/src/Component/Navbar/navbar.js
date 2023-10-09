import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddUserModal from '../../Admin/AddUserModal';
function Navbars() {
  const [showModal, setShowModal] = useState(false);

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Button variant="add" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Container>
      </Navbar>
      <br />
      <AddUserModal show={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default Navbars;
