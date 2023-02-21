import { Card } from "react-bootstrap";

const PlayerCards= ({name, img, statistics}) => {
    //? 👆 const {name, image, statistics} = props
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCards;