import React from 'react';
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FSD = () => {
  return (
    <div>
    <Container>
        <Row>
            <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/5483248/pexels-photo-5483248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card.Body>
        <Card.Title>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</Card.Title>
        <Card.Text>
        In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
      <Card.Body>
        <Card.Title>What Is Hacking? Types of Hacking & More</Card.Title>
        <Card.Text>
        Have you ever wondered what hacking is all about? It’s a big deal in today’s
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
        <Card.Text>
        Cybersecurity & Ethical hacking and have been key in making sure that your data online
        </Card.Text>
        <Button variant="primary">Read More </Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>
    </div>
  );
}

export default FSD;