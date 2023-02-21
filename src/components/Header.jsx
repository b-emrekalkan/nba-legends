import { Container, Image } from "react-bootstrap"
import nbaLogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container className="text-center mt-4">
        <Image src={nbaLogo} width="200px"></Image>
        <h1 className="my-2 font-monospace display-4">NBA🏀Legends</h1>
    </Container>
  )
}

export default Header