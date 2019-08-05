import React, { Component } from 'react';
import './App.css';

import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
  peopleDetails = [];

  constructor(){
    super();

    this.state = {
      peoples: [],
      searchField: ''
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

  handleChange = (event) => {
    this.setState({searchField : event.target.value })
  }

  render(){
    const { peoples, searchField } = this.state;
    const filteredPeople = peoples.filter(people => {
      return people.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
      <h1> Star Wars Scout </h1>
      <h3> May the Force be with you</h3>
        <SearchBox
          placeholder='Search your character'
          handleChange={this.handleChange }/>
        <CardList peoples={filteredPeople} />
      </div>
    );
  }
}

export default App;
