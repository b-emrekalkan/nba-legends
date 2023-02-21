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

```

## 

```javascript

```