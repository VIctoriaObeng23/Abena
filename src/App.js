import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import DisUsers from './components/DisUsers'
import AddForm from './components/AddForm';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Dagadu Selase",  
          email: "selase@gmail.com",
          gen: 3,
          id: "DS04"
          
        },
        {
          name: "Ofori solomon",
          email: "ofori@gmail.com",
          gen: 4,
          id: "OS05"
        
        },
        {
          name: "Pual Linda",
          email: "Linda@gmil.com",
          gen: 5,
          id: "PL09"
        },
        {
          name: "Mawu Esther",
          email: "esther@gmail.com",
          gen: 6,
          id: "076hy"
          
        },
      ]
    }
  }

  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter( user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })

  }
  editUser = (id,updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
  render() {
  return (
    <>
    <Container fluid style={{marginTop: "4rem"}} >
      <Row>
        <Col md="4">
          <h4>Add Users</h4>
          

          < AddForm  addUser = {this.addNewUser}   />
        </Col>
        <Col md="8">
          <h4>All Codetrain Users</h4>


          <DisUsers usersDate={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
        </Col>

      </Row>
    </Container>
    
    </>
  );
  }
}

export default App;
