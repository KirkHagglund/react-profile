import React from 'react';
import { Container, Button} from 'react-bootstrap';
import '../styles/resume.css';

function Resume() {

    return (
        <Container className="resume-container">
            <Button className="resume-btn" target="_blank" href="https://docs.google.com/document/d/1HUPyggRHq6LsgpmE4kHsQW7c4vaet8X94xw-u33Qp7k/edit?usp=sharing">Download My Resume</Button>
            <h1>Proficiencies:</h1>
            <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>GraphQL</li>
            </ul>
        </Container>
    )
}

export default Resume;

