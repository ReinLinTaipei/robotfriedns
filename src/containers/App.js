import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { Scroll } from '../components/Scroll'
import './App.css'
import './ErrorBoundary'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    console.log(`render: ${robots.length}`)
    if (!robots.length) {
      return <h1 className="tc">Loading</h1>
    }
    else {
      const filter = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      console.log(`filter: ${filter.length}`)
      return (
        <div className="tc">
          <h1 className="f1">Robots</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>

              <CardList robots={filter} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}

export default App
