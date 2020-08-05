import React from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';

function VerbForm(){
    return(
        <div>
            <MWNavBar/>
            <Card className="mx-auto top-15" bg="light" style={{ width: '20rem' }}>
                <Card.Header>Verb</Card.Header>
                <Form >
                    <Form.Group  id="verbGroup">
                        <Form.Label>Verb</Form.Label>
                        <Form.Control type="text" placeholder="Verb" />
                    </Form.Group>

                    <Form.Group  id="partizipGroup">
                        <Form.Label>Partizip II</Form.Label>
                        <Form.Control type="text" placeholder="Partizip" />
                    </Form.Group>

                    <Form.Group id="descriptionGroup">
                        <Form.Label>Beschreibung</Form.Label>
                        <Form.Control as="textarea" placeholder="Beschreibung" rows="2"/>
                    </Form.Group>
                    <Button block variant="primary" type="submit">Senden</Button>
                </Form>
            </Card>
        </div>
    );
}

export default VerbForm;