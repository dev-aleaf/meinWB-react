import React from 'react';
import MWNavBar from './MWNavBar';
import { Card, ListGroup, ListGroupItem, Form, FormGroup, Button, Col } from 'react-bootstrap';

function App(){
    return (
        <div>
            <MWNavBar/>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item action href="#" variant="dark">Wort Liste</ListGroup.Item>
                    <ListGroup.Item action href="#" variant="dark" >Wort einzufüngen</ListGroup.Item>
                    <Form>
                        <Form.Control type="text" placeholder="Wort" />
                        <Button block variant="primary" type="submit">Wort Suchen</Button>
                    </Form>
                </ListGroup>
            </Card>
        </div>
    );
}

export default App;