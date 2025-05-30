import React from "react";
import { Button, Navbar } from "react-bootstrap";

// This component renders the Navbar of our application
export function NavBar( props ){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> 
                Solania Chat App 
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text> 
                    <Button style={{ display: props.showButton }} variant="success" onClick={ async () => { props.login(); }}>
                        Connect to Metamask
                    </Button>
                    <div style={{ display: props.showButton === "none" ? "block" : "none" }}>
                        Signed in as: 
                        <span style={{ color: "#0d6efd", textDecoration: "underline", cursor: "pointer" }}>
    { props.username }
</span>
                    </div>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}