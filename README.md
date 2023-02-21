# <center>💥 NBA Legends Project 💥</center>

## <center>👇 PROJECT STEPS 👇</center>

## ⌨️ Install Bootstrap 👇

```bash
npm install react-bootstrap bootstrap
```

## 🚩 Import CSS 👉 The following line can be included in your src/index.js or App.js file 👇

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## 🚩 Index.css 👇

```css
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-image: url("./assets/lebron-james-lakers-mixed-media-elite-editions.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## Create "components" folder under "src" folder

## Create "Header.jsx" file under "components" folder 👇

```javascript
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
```

## Create CardContainer.jsx file under "components" folder 👇

```javascript
import { Col, Container, Row, Form } from "react-bootstrap"
//! 👇 Since data is exported as "export const", we need to call it in curly braces while importing.
import { data } from "../helpers/data"
import PlayerCards from "./PlayerCards"
import { useState } from "react";

const CardContainer = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            <Form.Control
                type="search"
                placeholder="Search Player..."
                className="w-50 m-auto"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Container className="card-container rounded-4 my-4 p-3">
                <Row className="gap-3 justify-content-center">
                    {data.filter((player) => player.name.toLowerCase().includes(search.trim().toLowerCase())).map((player, index) => (
                        <Col md={6} lg={4} xl={3} key={index}>
                            <PlayerCards {...player} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default CardContainer
```

## Create PlayerCards.jsx for rendering players under "components" folder 👇

```javascript
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
```

# <center> 🚩 DEPLOYMENT 🚩 </center>

## Deployment Notes

- There should be only one lock file package-lock.json or yarn.lock.
- There shouldn't be any warnings in your application.
- If you have deployed your app to github pages before, you should remove homepage property from package.json.

## For deployment; to create a "build" folder 👇

```bash
yarn run build
```

## Go to [Netlify](https://www.netlify.com/) and deploy the site with "Import an existing project" option.