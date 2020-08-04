import React from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';

function SubstantiveForm(){
    return (
        <div>
            <MWNavBar/>
            <Card bg="light" style={{ width: '20rem' }}>
                <Card.Header>Substantiv</Card.Header>
                <Form >
                    <Form.Group  id="wordNameGroup">
                        <Form.Label>Substantiv</Form.Label>
                        <Form.Control type="text" placeholder="Wort" />
                    </Form.Group>

                    <Form.Group  id="genderGroup">
                        <Form.Label>Geschlecht</Form.Label>
                        <Form.Control as="select">
                            <option>Das</option>
                            <option>Der</option>
                            <option>Die</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group  id="pluralGroup">
                        <Form.Label>Plural</Form.Label>
                        <Form.Control type="text" placeholder="Plural" />
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

export default SubstantiveForm;