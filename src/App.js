import React, { Component } from 'react';
import './App.css';

import { CardList } from './component/card-list/card-list.component';

class App extends Component {
  peopleDetails = [];

  constructor(){
    super();

    this.state = {
      people: []
    }

  }

  componentDidMount(){
    this.callAPI('https://swapi.co/api/people/');
  }

  bindPeopleState = (response) => {
    for(let people of response.results){
      this.peopleDetails.push(people);
      this.setState({people: this.peopleDetails})
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

        <CardList>
          {
            this.state.people.map(people=>{
                return <h1 key={people.name}>{ people.name }</h1>
            })
          }
        </CardList>
      </div>
    );
  }
}

export default App;
