import React, { useState } from 'react';
import MWNavBar from './MWNavBar';
import { Card, ListGroup,Form,Button} from 'react-bootstrap';
import axios from 'axios';

function Home(){

    const [word, setWord] = useState("");

    function handleChange(event){
        //console.log(event.target.value);
        setWord(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        const wordTest = {
            palabra: word
        }
        axios.post('http://localhost:3030/search', wordTest)
          .then((result) => {
            //access the results here....
          });
    }//handleSubmit

    return (
        <div>
            <MWNavBar/>
            <Card className="mx-auto top-15" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item action href="/wordList" variant="dark">Wortliste</ListGroup.Item>
                    <ListGroup.Item action href="/chooseType" variant="dark" >Wort einzufüngen</ListGroup.Item>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control name="word" onChange={handleChange} placeholder="Wort"
                            type="text"  value={word}/>
                        <Button block variant="primary" type="submit">Wort Suchen</Button>
                    </Form>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Home;