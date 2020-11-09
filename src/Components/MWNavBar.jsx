import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import swal from 'sweetalert';

function MWNavBar(props){
    let display = true;
    if(props.notLogged)
        display = false;

    function logOut(){
        swal({
            title: "Bist du sicher?",
            text: "Willst du dich ausloggen?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((logOut) => {
            if (logOut) {
                localStorage.removeItem("userMW");
                window.location.replace("/login");
            } 
          });
    }//logOut
    
    return (
        <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Mein Wörterbuch</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    {display && <Nav.Link href="/wordList">Wortliste</Nav.Link>}
                </Nav>
                <Nav>
                    {display && (
                        <NavDropdown title={"Willkomen: " + props.name} id="collasible-nav-dropdown">
                            <NavDropdown.Item variant="danger" onClick={logOut}>Log Out</NavDropdown.Item>
                        </NavDropdown>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MWNavBar;
