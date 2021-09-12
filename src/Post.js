import React from "react";
import { useState } from "react";
import { Table, Modal, Button, ModalBody, ModalTitle } from "react-bootstrap";
import axios from "axios";

class PostApp extends React.Component {
  constructor() {
    super();
    this.state = {
      userComments: [],
    };
  }

  componentDidMount = () => {
    this.getComments();
  };

  getComments = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      this.setState({ userComments: data });
      console.log(this.state.userComments);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userComments.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

//export default PostApp;

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostApp />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
