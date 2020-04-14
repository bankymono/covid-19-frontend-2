import React from 'react';
import DataInput from './components/DataInput';
import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App outerDiv">
      <Helmet>
        <title>Covid-19 Estimator</title>
        <meta name="viewport" content="width=device-width, initial scale=1.0" />
        <meta name="covid" content="A site about covid. gives estimate on covid impaact in a region" />
        <meta name="covid2" content="COVID-19,impact,severe, estimate" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Helmet>
      <h3>COVID-19 IMPACT ESTIMATOR</h3>
      <div className="secondOuterDiv">PLEASE ENTER THE FOLLOWING DATA TO ESTIMATE IMPACT</div>
      <br />
      <DataInput />
    </div>
  );
}

export default App;
