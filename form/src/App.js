import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form className='form'>
        
          <Form.Group >
            <Form.Label >
              First Name
            </Form.Label>

            <Form.Control type="text" placeholder='First Name' style={{boxShadow:"0 1px 4px #000"}}>

            </Form.Control>
          </Form.Group><br></br>

          
         
          <Form.Group>
            <Form.Label>
              Last Name
            </Form.Label>

            <Form.Control type="text" placeholder='Last Name' style={{boxShadow:"0 1px 4px #000"}}>

            </Form.Control>
          </Form.Group><br></br>
         


         
          <Form.Group>
            <Form.Label>
              Email Address
            </Form.Label>

            <Form.Control type="email" placeholder='Example@gmail.com' style={{boxShadow:"0 1px 4px #000"}}>

            </Form.Control>
          </Form.Group><br></br>

         
          <Form.Group>
            <Form.Label>Password</Form.Label>

            <Form.Control type="password" placeholder='Password' style={{boxShadow:"0 1px 4px #000" }}>

            </Form.Control>
          </Form.Group><br></br>
         
          <Button  variant="outline-dark" type="submit">Sign Up</Button>
          <br></br>
        </Form>
      
        </Container>
      </header>
    </div>
  );
}

export default App;
