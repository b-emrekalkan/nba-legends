import { Col, Container, Row } from "react-bootstrap"
//! 👇 Since data is exported as "export const", we need to call it in curly braces while importing.
import { data } from "../helpers/data"
import PlayerCards from "./PlayerCards"

const CardContainer = () => {
    return (
        <Container className="card-container rounded-4 my-4 p-3">
            <Row>
                {data.map((player, index) => (
                    <Col key={index}>
                        <PlayerCards {...player} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardContainer