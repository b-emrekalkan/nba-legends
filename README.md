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

## Create "components" folder under "src" folder

## Create "Header.jsx" file under "components" folder 👇

```javascript
import { Container, Image } from "react-bootstrap"
import nbaLogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
        <Image src={nbaLogo}></Image>
        <h1>NBA 🏀 Legends</h1>
    </Container>
  )
}

export default Header
```

## 

```javascript

```