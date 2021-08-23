import "./styles.css";
import { Card, Button } from "react-bootstrap";
import ReactButton from "./ReactButton";

export default function App() {
  return (
    <div className="App">
      <Card className="card">
        <Card.Title>
          <br/>
        <h2>
          USD Big Mac
        </h2>
        </Card.Title>
        <Card.Body>
      <h3
      >Start moving around the object art</h3>
      <h4>Click the AR scan to bring it to life</h4>
      <h2>
        Buy on OpenSea for 3.99
      </h2>
      <ReactButton />
      </Card.Body>
      </Card>
    </div>
  );
}
