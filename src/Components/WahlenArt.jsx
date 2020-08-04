import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import MWNavBar from './MWNavBar';
function WahlenArt(){
    return(
        <div>
            <MWNavBar/>
            <Card bg="light" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item action href="#" variant="dark">Verb</ListGroup.Item>
                    <ListGroup.Item action href="#" variant="dark" >Substantiv</ListGroup.Item>
                    <ListGroup.Item action href="#" variant="dark" >Anderes Wort</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default WahlenArt;