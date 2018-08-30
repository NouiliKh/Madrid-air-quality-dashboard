import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Radarchart from './components/radarchart'
import { TabsContainer, Tabs, Tab } from 'react-md';
import Map from './components/map'
import Linearplot from './components/linearplot'
import { RoutedTabs, NavTab } from 'react-router-tabs';
import Barchart from './components/barchart'

import '../node_modules/react-router-tabs/styles/react-router-tabs.scss'


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <NavTab to="/radar">Radarchart</NavTab>
        <NavTab to="/linear">Linearplot</NavTab>
        <NavTab to="/barchart">Bar chart</NavTab>


        <Switch>
          <Route exact path="/radar" component={Radarchart} />
          <Route path="/linear" component={Linearplot} />
          <Route path="/barchart" component={Barchart} />
        </Switch>
      </React.Fragment>

    );
  }
}

export default App;
