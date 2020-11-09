import React, { useEffect, useState } from 'react';
import MWNavBar from './MWNavBar';
import { Card,Table, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

function WordList(){

    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");
    //console.log(user);
    const idUser = user.idUser;

    const url = 'http://localhost:3030/word/word-list/' + idUser;
    const [foundWords, setFoundWords] = useState([]);

    useEffect(()=>{
        //console.log("la url ", url);
        axios.get(url, {headers:{
            "Content-Type": "application/json"},
        })
          .then((result) => {
            const success = result.data.success;
            
            if(success)
            {
                //console.log(result);
                const wordsArray = result.data.data;
                setFoundWords(wordsArray);
                //console.log("the found words", foundWords);
                if(wordsArray.length === 0)
                    swal("bisher gibt es keine Wörter");
            }
            else
            {
                swal("Error", "Es gab einen Fehler beim Wörtersuchen", "error");
                const errMess = JSON.stringify(result.data.message);
                console.log(errMess);
            }
          });
    },[]);//useEffect

    function setWordForDetail(wordIndex){
        localStorage.setItem("word", JSON.stringify(foundWords[wordIndex]));
        window.location.replace("/wordDetail");
    }//setWordForDetail

    function createWordRow(oneFound, index){
        //console.log("enters one found");
        return(
            <tr
                key={index}
            >
                <td>{oneFound.wordName}</td>
                <td>
                    <Button 
                        block
                        variant="primary"
                        onClick={()=>{
                            setWordForDetail(index);
                            }}>
                        <i className="fas fa-star"></i> Das Detail
                    </Button>
                </td>
            </tr>
        );
    }//createWordRow

    return (user != null &&(
        <div>
            <MWNavBar
                name={user.name}
            />
            <Card className="mx-auto top-15" bg="light" style={{ width: '18rem' }}>
                <Card.Body>
                    <Table striped bordered hover>
                        <tbody>
                            {foundWords.map(createWordRow)}
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
    ));
}

export default WordList;