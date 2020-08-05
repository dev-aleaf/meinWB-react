import React from 'react';
import MWNavBar from './MWNavBar';
import { Card, ListGroup,Form,Button} from 'react-bootstrap';

function Home(){
    return (
        <div>
            <MWNavBar/>
            <Card className="mx-auto top-15" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item action href="/wordList" variant="dark">Wortliste</ListGroup.Item>
                    <ListGroup.Item action href="/chooseType" variant="dark" >Wort einzufüngen</ListGroup.Item>
                    <Form>
                        <Form.Control type="text" placeholder="Wort" />
                        <Button block variant="primary" type="submit">Wort Suchen</Button>
                    </Form>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Home;