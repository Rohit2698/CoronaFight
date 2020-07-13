import React, {Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from './Overview';
import Prevention from './Prevention';
import Symptom from './Symptom';
 
class Option extends Component {
    constructor() {
      super();
      this.state = { tabIndex: 0 };
    }
    render() {
      return (
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <Tab>OverView</Tab>
            <Tab>Prevention</Tab>
            <Tab>Symptoms</Tab>
          </TabList>
          <TabPanel><OverView/></TabPanel>
          <TabPanel><Prevention/></TabPanel>
          <TabPanel><Symptom/></TabPanel>
        </Tabs>
      );
    }
  }  
    export default Option;