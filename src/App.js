import React, { Component } from 'react'
import Calendar from './components/Calendar'
import Earnings from './components/Earnings'
import Expenses from './components/Expenses'
import Progress from './components/Progress'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="grid-container">
          <header>
            <div className="brand"><a href="/">Dash Tracker</a></div>
            <div className="login-area">Login</div>
          </header>
          <main>
            <Progress></Progress>
            <Calendar></Calendar>
            <Expenses></Expenses>
            <Earnings></Earnings>
          </main>
          <footer>
            <p>&copy; 2020; All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    )
  }
}
