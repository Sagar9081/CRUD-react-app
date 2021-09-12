import React from "react";

import { SiReactrouter, SiReact, SiBootstrap } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

class Home extends React.Component {
  render() {
    return (
      <>
        <p className="hometag"> Learning</p>

        <p className="hometag1">React Library</p>
        <img
          className="homeimage"
          src="https://www.kindpng.com/picc/m/4-41788_developer-character-developer-images-png-transparent-png.png"
          alt="Loading React"
          height="42"
          width="500"
        />
        <h2>App is built in react using:</h2>
        <div className="router">
          <p>
            <i className="routelogo">
              <SiReactrouter />
            </i>
            React-Router-Dom
          </p>
        </div>
        <div className="reactlogo">
          <i className="reactlogo1">
            <SiReact />
          </i>
          React
        </div>
        <div className="bootstrap">
          <i className="bootstrap1">
            <SiBootstrap />
          </i>
          Bootstrap
        </div>
        <div className="icon">
          <i className="icon1">
            <RiReactjsLine />
          </i>
          React-Icons
        </div>
      </>
    );
  }
}

export default Home;
