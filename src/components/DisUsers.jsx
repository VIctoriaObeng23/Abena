import React from "react";
import { Container, Row } from "react-bootstrap";
import AUser from './AUser'

const DisUser = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.usersDate.map((user)  =>{
                        return(
                         <AUser 
                          userInfo= {user} 
                          key={user.id} 
                          deleteUser= {props.deleteUser}
                          editUser={props.editUser}
                          />
                        );
                    })
                }
            </Row>
            
        </Container>
    );
}

export default DisUser;