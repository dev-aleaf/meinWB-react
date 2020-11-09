import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import MWNavBar from './MWNavBar';
function ChooseType(){

    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");
    
    return(user != null &&(
        <div>
            <MWNavBar
                name={user.name}
            />
            <Card className="mx-auto top-15" bg="light" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item action href="/verbForm" variant="dark">Verb</ListGroup.Item>
                    <ListGroup.Item action href="/substantiveForm" variant="dark" >Substantiv</ListGroup.Item>
                    <ListGroup.Item action href="/otherForm" variant="dark" >Anderes Wort</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    ));
}

export default ChooseType;