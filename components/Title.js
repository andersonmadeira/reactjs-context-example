import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

/**
 * Here we access the context through this.context
 * when we only care about one single context
 */
class Title extends React.Component {
  static contextType = LanguageContext

  render() {
    const title = this.context === 'en' 
     ? 'Greetings!' 
     : 'Saudações!'

    return (
      <h3>{title}</h3>
    )
  }
}

export default Title
