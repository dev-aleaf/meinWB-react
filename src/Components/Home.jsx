import React, { useState } from 'react';
import MWNavBar from './MWNavBar';
import { Card, ListGroup,Form,Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

function Home(){

    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");
    const idUser = user.idUser;

    const [typedWord, setWord] = useState("");
    const url = 'http://localhost:3030/word/search/' + idUser;

    function handleChange(event){
        //console.log(event.target.value);
        setWord(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        const urlSearch = url + "/" + typedWord;
        console.log(urlSearch);
        axios.get(urlSearch, {headers:{
            "Content-Type": "application/json"},
        })
          .then((result) => {
            const respMessage = JSON.stringify(result.data.message);
            const success = result.data.success;
            if(success)
            {
                const foundWord = result.data.data;
                //console.log("lo found "+foundWord);
                if(foundWord != null)
                {
                    localStorage.setItem("word", JSON.stringify(result.data.data));
                    window.location.replace("/wordDetail");
                }
                else
                    swal({
                        title: "Nicht im Wörterbuch", 
                        text: "Willst du das Wort einfügen?", 
                        icon: "info",
                        buttons: ["Nein", "Einfügen"]
                    })
                    .then((yes)=>{
                        if(yes)
                            window.location.replace("/chooseType");
                    });
            }
            else
            {
                console.log(respMessage);
                swal("Oops!", "Es gab ein Fehler beim Suchen", "error");
            }
          });

    }//handleSubmit

    return ( user != null &&(
        <div>
            <MWNavBar
                name={user.name}
            />
            <Card className="mx-auto top-15" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item action href="/wordList" variant="dark">Wortliste</ListGroup.Item>
                    <ListGroup.Item action href="/chooseType" variant="dark" >Wort einzufüngen</ListGroup.Item>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control name="word" onChange={handleChange} placeholder="Wort"
                            type="text"  value={typedWord}/>
                        <Button block variant="primary" type="submit">Wort Suchen</Button>
                    </Form>
                </ListGroup>
            </Card>
        </div>
    ));
}

export default Home;