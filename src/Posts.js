import React from "react";
import axios from "axios";

import { Table, Button } from "react-bootstrap";
import { RiDeleteBin6Fill, RiEdit2Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class PostApp extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      names: [],
      userComments: [],
      postsComment: [],
      id: "",
      userId: "",
      title: "",
      body: "",
    };
  }

  componentDidMount = () => {
    this.getPosts();
    this.getUser();
    this.getComments();
  };

  getPosts = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data });
      // console.log(this.state.posts);
    } catch (err) {
      console.error(err);
    }
  };
  getUser = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ names: data });
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  getComments = async (id) => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );

      const postsComment = [...this.state.postsComment];
      postsComment.push(data);
      this.setState({ userComments: postsComment });
      //console.log(this.state.userComments);
      //console.log(this.state.postsComment);
    } catch (err) {
      console.error(err);
    }
  };

  createPost = async () => {
    // API Call to server and add new post
    try {
      const { userId, title, body } = this.state;
      const { data } = await axios.post(API_URL, {
        userId,
        title,
        body,
      });
      const posts = [...this.state.posts];
      posts.push(data);
      this.setState({ posts, userId: "", title: "", body: "" });
    } catch (err) {
      console.error(err);
    }
  };

  updatePost = async () => {
    // API Call to server and update an existing post
    try {
      const { id, userId, title, body, posts } = this.state;
      const { data } = await axios.put(`${API_URL}/${id}`, {
        userId,
        title,
        body,
      });
      const index = posts.findIndex((post) => post.id === id);
      posts[index] = data;

      this.setState({ posts, id: "", userId: "", title: "", body: "" });
    } catch (err) {
      console.log(err);
    }
  };

  deletePost = async (postId) => {
    // API Call to server and delete post
    try {
      await axios.delete(`${API_URL}/${postId}`);

      let posts = [...this.state.posts];
      posts = posts.filter(({ id }) => id !== postId);

      this.setState({ posts });
    } catch (err) {
      console.error(err);
    }
  };

  selectPost = (post) => this.setState({ ...post });

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted...");
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  render() {
    return (
      <>
        <div>
          {this.state.userComments.map((post) => {
            return (
              <div key={post.id} className="usercomments">
                <p>
                  {post.id} Name :{post.name}
                </p>
                <p>Email :{post.email}</p>
                <p>Body :{post.body}</p>
              </div>
            );
          })}
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <select>
            {this.state.names.map((post) => {
              return <option key={post.id}>{post.name}</option>;
            })}
          </select>
          <label> UserID : </label>

          <input
            type="number"
            name="userId"
            value={this.state.userId}
            onChange={this.handleChange}
          />
          <label> Title : </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label> Body : </label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <Button variant="success" onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
        <Table className="datatable" striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Body</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      className="editbtn"
                      onClick={() => this.selectPost(post)}
                    >
                      <RiEdit2Line />
                    </button>
                  </td>
                  <td>
                    <button
                      className="deletebtn"
                      onClick={() => this.deletePost(post.id)}
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </td>
                  <td>
                    <button
                      className="editbtn"
                      onClick={() => this.getComments(post.id)}
                    >
                      <GrView />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default PostApp;
