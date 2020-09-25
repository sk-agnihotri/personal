import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'
import Education from './components/education'
import Home from './components/home'
import Skills from './components/skills';
import Contact from './components/contact';
import Experience from './components/experience'

class App extends Component{
  render() {return (
    <div className="bg-img">
          <HashRouter>
            <Navbar />
            <Switch>
            <Route exact path='/' component = {Home} />
            <Route path='/edu' component = {Education} />
            <Route path='/exp' component = {Experience} />
            <Route path='/skills' component = {Skills} />
            <Route path='/contact' component = {Contact} />
            </Switch>
          </HashRouter>
  </div>
  );
}}

export default App;
