import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCards = ({ name, img, statistics }) => {
    //? 👆 const {name, image, statistics} = props
    const [showImage, setShowImage] = useState(true);
    const handleClick = () => setShowImage(!showImage);
    return (
        <Card
        //? onClick={() => setShowImage(!showImage)}
        onClick={handleClick}
        className="rounded-2 m-auto player-card" role="button">
            {showImage ? (
                <Card.Img variant="top" src={img} className="player-img" />
            ) :
                (
                    <ul className="m-auto">
                        {statistics.map((item, index) => {
                            return (
                                <li className="h5 text-start list-unstyled" key={index}>🏀 {item}</li>
                            )
                        })}
                    </ul>
                )}
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
};

export default PlayerCards;