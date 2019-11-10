import React, { useState } from 'react'
import AppContent from './AppContent'
import ColorContext from '../contexts/ColorContext'
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component {
  state = { lang: 'en', color: 'blue' }

  changeLang = lang => {
    this.setState({ lang })
  }

  changeColor = color => {
    this.setState({ color })
  }

  render() {
    return (
      <>
        <p>Color?</p>
        <ul>
          <li>
            <a href="#?" onClick={() => this.changeColor("blue")}>
              blue
            </a>
          </li>
          <li>
            <a href="#?" onClick={() => this.changeColor("red")}>
              red
            </a>
          </li>
        </ul>
        <p>Language?</p>
        <ul>
          <li>
            <a href="#?" onClick={() => this.changeLang("pt-br")}>
              pt-br
            </a>
          </li>
          <li>
            <a href="#?" onClick={() => this.changeLang("en")}>
              en
            </a>
          </li>
        </ul>
        {/* Color and Language contexts' values are managed
            by the App state, whenever the user changes the color
            or language, the contexts are provided with the updated
            values that are then pushed down to nested components
            that consume those values */}
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.lang}>
            <AppContent />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </>
    )
  }
}

export default App
