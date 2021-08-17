import "./styles.css";
import { Card, Button } from "react-bootstrap";
import OpenSeaButton from "./ReactButton";

export default function App() {
  return (
    <div className="App">
      <Card className="card">
        <Card.Title>
        <h1>
          USD Big Mac
        </h1>
        </Card.Title>
        <Card.Body>
      <h3>Start moving around the object art</h3>
      <h4>Click the AR scan to bring it to life</h4>
      <h2>
        Buy on OpenSea for 3.99
      </h2>
      <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/112829198486691756376904202910570877934169287029014742543201552265834770989061" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">OpenSea</a>       
      </Card.Body>
      </Card>
    </div>
  );
}
