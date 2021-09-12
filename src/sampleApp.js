import { BrowserRouter, Link, Route, Redirect, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Post from "./Post";

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Link className="home1" to="/">
          <i className="fas fa-home"> Home</i>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="home1" to="/about">
          <i className="fas fa-address-card">About</i>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="home1" to="/posts">
          <i className="fas fa-mail-bulk">Posts</i>
        </Link>
      </div>
      <Link className="react" to="/">
        <i className="fab fa-react"></i>
      </Link>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/post/:postId">
          <Post />
        </Route>
        <Route exact path="/" component={Home} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <p>404 Page</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*
  / or /home => Home
  /about => About
  /posts => Posts
  /post/1 => Post

  */
