import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import './App.css';

function App() {
  return (
    <React.Fragment>
        <CssBaseLine/>
        <Container>
        <Button variant="contained" color="primary">
           Sign Up
        </Button>
        </Container>
    </React.Fragment>
  );
}

export default App;
