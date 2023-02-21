import { Container } from "react-bootstrap"
//! 👇 Since data is exported as "export const", we need to call it in curly braces while importing.
import {data} from "../helpers/data"

const CardContainer = () => {
  return (
    <Container>
        {data.map((player) => console.log(player))}
    </Container>
  )
}

export default CardContainer