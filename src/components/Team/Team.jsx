import React, { useEffect, useState } from 'react';
import './team.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import API from '../../utils/API';

const Team = () => {
    const [teamdata, setteamdata] = useState([])
    useEffect(() => {
        API.APITeam()
            .then(response => {
                setteamdata(response.data.results)
            })
    })
    return (
<div className='team-cards'>
        <Row xs={1} md={2} className="g-4">
            {teamdata !== [] &&
                <>
                    {teamdata.map((teamMember, key) => (
                        <Col>
                            <Card className="card">
                                <Card.Img src={teamMember.picture.large} className="member-image" />
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
                </>
            }
        </Row> 
        </div>
    )
}
export default Team;