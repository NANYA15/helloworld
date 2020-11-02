import React from 'react';
import './App.css'
//import TextField from '@material-ui/core/TextField';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './signup.js';
import Signin from './signin.js';
import './App.css';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

//import { directive } from '@babel/types';

function App(){
    

   return(
    <BrowserRouter>
    <Switch>
       <Route path = '/' exact component = {Signup}></Route> 
       <Route path = '/signup' component = {Signup}></Route>
       <Route path = '/signin' component = {Signin}></Route>
    </Switch>
    </BrowserRouter>
           // <React.Fragment>
            //<Signin/>
            //</React.Fragment>
   );
}


export default App;