import React, { Component } from 'react';
import './App.css';

import { CardList } from './component/card-list/card-list.component';

class App extends Component {
  peopleDetails = [];

  constructor(){
    super();

    this.state = {
      peoples: []
    }

  }

  componentDidMount(){
    this.callAPI('https://swapi.co/api/people/');
  }

  bindPeopleState = (response) => {
    for(let people of response.results){
      this.peopleDetails.push(people);
      this.setState({peoples: this.peopleDetails})
    }

    if(response.next){
      this.callAPI(response.next)
    }
  }

  callAPI = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(response => this.bindPeopleState(response));
  }

  render(){
    return (
      <div className="App">
        <CardList peoples={this.state.peoples} />
      </div>
    );
  }
}

export default App;
