import React from 'react';
import './team.css';
import teamdata from '../../utils/test[1722].json'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Team = () => {
      return (
            
            <Row xs={1} md={2} className="g-4">
              {teamdata.results.map((teamMember, key) => (
                <Col>
                  <Card className="card">
                    <Card.Img src={teamMember.image.large} className="member-image"/>
                    <Card.Body>
                      <Card.Title>{teamMember.name.first} {teamMember.name.last}</Card.Title>
                      <Card.Text className="member-location">
                        {teamMember.location.city} {teamMember.location.state}
                      </Card.Text>
                      <Card.Text className="member-email">
                        {teamMember.email} 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
      ); 
              }
export default Team;