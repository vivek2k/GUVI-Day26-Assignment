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
      <Card.Img variant="top" src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card.Body>
        <Card.Title>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</Card.Title>
        <Card.Text>
        Are you someone who’s not interested in coding, but wants to get placed in tech
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Impact of Certification Programs on Hiring Data Scientists</Card.Title>
        <Card.Text>
        Data scientists are the creators behind transforming the raw data into edible data insights. These
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Top Product-Based Companies for Data Science Freshers</Card.Title>
        <Card.Text>
        In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing
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