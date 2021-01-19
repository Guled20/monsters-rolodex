import React, { Component } from 'react';
import CardList from './Component/card-list/card-list.component';
import SearchBox from './Component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { monsters, searchfield } = this.state;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          placeholder={'search monsters'}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
