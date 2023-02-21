import { Col, Container, Row } from "react-bootstrap"
//! 👇 Since data is exported as "export const", we need to call it in curly braces while importing.
import { data } from "../helpers/data"
import PlayerCards from "./PlayerCards"

const CardContainer = () => {
    return (
        <Container className="card-container rounded-4 my-4 p-3">
            <Row className="gap-3 justify-content-center">
                {data.map((player, index) => (
                    <Col md={6} lg={4} xl={3} key={index}>
                        <PlayerCards {...player} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardContainer