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
      <Card.Img variant="top" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card.Body>
        <Card.Title>Top Ways to Assess Soft Skills in Full Stack Developers in 2024</Card.Title>
        <Card.Text>
        When you’re hiring a full-stack developer, what are the most important things you look for?
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
      <Card.Body>
        <Card.Title>Top Differences: Full Stack Developer vs Software Engineer 2024</Card.Title>
        <Card.Text>
        A Full Stack Developer is a tech all-rounder. They work on both the front and
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Horizontal vs Vertical Scaling for Efficient System Design</Card.Title>
        <Card.Text>
        In the world of system design, envision a digital skyscraper – a multifaceted structure built
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