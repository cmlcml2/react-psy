import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";

function KitchenSinkExample() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Header className="text-center fs-2">Relaxation</Card.Header>
      <Card.Body>
        <Card.Title className="text-center">30 minutes</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue vitae dui non dictum. In hac habitasse platea dictumst. Cras elementum efficitur lacus, pretium tempor purus porta.
        </Card.Text>
      </Card.Body>

      <Card.Footer className="d-grid">
        <Button  variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
  );
}

export default KitchenSinkExample;