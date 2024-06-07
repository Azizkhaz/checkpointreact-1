import './App.css';
import Name from './component/Name'
import Price from './component/Price'
import Description from './component/Description'
import Image from './component/Image'
import Card from 'react-bootstrap/Card';
import { imageUrl, name } from './product';
function App() {
  
  return (
    <>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={name}/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Title><Price/></Card.Title>
        <Card.Title><Description/></Card.Title>
        
      </Card.Body>
    </Card>
    <p>Hello Aziz</p>
    <img src='aziz.jpg' alt='image'/>

    </>
  )
};

export default App;
