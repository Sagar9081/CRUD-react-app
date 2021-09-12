import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function About() {

  return (
    <>

      <table className="namebody">
        <tbody>
          <tr>
            <td><img className="aboutimage" src="../IMG_20210616_222722.jpg" alt="loading" /></td>
          </tr>
          <tr>
            <td><span className="name">Name:</span> <span className="name1">Sagar Chandore</span></td>
          </tr>
          <tr>
            <td><span className="name">Education:</span><span className="name1">B.E.Electrical Engineering</span></td>
          </tr>
        </tbody>
      </table>
      <img className="imgabout" src="https://cdn3.vectorstock.com/i/thumb-large/73/07/programming-isometric-man-vector-28837307.jpg" alt="loading" />


    </>
  );
}

export default About;

/*
  goBack
  goForward
  push
  replace
*/
