import React from 'react';
import MWNavBar from './MWNavBar';
import { Card,Table } from 'react-bootstrap';

function WordList(){
    return (
        <div>
            <MWNavBar/>
            <Card bg="light" style={{ width: '18rem' }}>
                <Card.Body>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Wort Name</td>
                                <td>
                                    <a class="btn btn-primary"
                                        href="/wordDetail">
                                        <i class="fas fa-star"></i> Das Detail
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* <ListGroup variant="flush">
                    <ListGroup.Item action href="#" variant="dark">Wort Liste</ListGroup.Item>
                    <ListGroup.Item action href="#" variant="dark" >Wort einzufüngen</ListGroup.Item>
                    <Form>
                        <Form.Control type="text" placeholder="Wort" />
                        <Button block variant="primary" type="submit">Wort Suchen</Button>
                    </Form>
                </ListGroup> */}
        </div>
    );
}

export default WordList;