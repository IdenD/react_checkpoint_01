import {Card, Col, Container, Row} from 'react-bootstrap';
import Name from './composants/Name';
import Image from './composants/Image';
import Description from './composants/Description';
import Price from './composants/Price';

const nom = 'EDAN';

function App() {
  return (
    <>
      <Container className='Container'>
        <Row className='Row'>
          <Col lg={4}>
            <Card style={{ width: '18rem' }}>
              <Image />
                <Card.Body>
                  <Name />
                  <Description />
                  <Price />
                 
                </Card.Body>
            </Card>
          </Col>
          <NomAffiche />
        </Row> 
      </Container> 
     
    </>
  );
}

function NomAffiche () {
    return ( 
      <div>
        <p>Bonjour {nom && `${nom}`}</p>
      </div>
  )
}



export default App;
