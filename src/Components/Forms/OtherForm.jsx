import React from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';

function OtherForm(){
    return (
        <div>
            <MWNavBar/>
            <Card className="mx-auto top-15" bg="light" style={{ width: '20rem' }}>
                <Card.Header>Anderes Wort</Card.Header>
                <Form >
                    <Form.Group  id="wordNameGroup">
                        <Form.Label>Wort</Form.Label>
                        <Form.Control type="text" placeholder="Wort" />
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

export default OtherForm;