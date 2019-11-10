import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class NameInput extends React.Component {
  static contextType = LanguageContext

  onNameChange = event => {
    this.props.onChange(event.target.value)
  }

  render() {
    const label = this.context === 'en' 
     ? 'Type your name' 
     : 'Digite seu nome'

    return (
      <input
        type="text"
        name="name"
        placeholder={label}
        onChange={this.onNameChange}
        autoComplete="off"
      />
    )
  }
}

export default NameInput
