import React from 'react'
import Title from './Title'
import NameInput from './NameInput'
import WelcomeMessage from './WelcomeMessage'

// This intermediate component doesn't consume 
// context data, it just manages name changes
// and sends those changes to a custom message comp
class AppContent extends React.Component {
  state = { name: undefined }

  handleNameChange = name => {
    this.setState({ name })
  }

  render() {
    return (
      <>
        <Title />
        <NameInput onChange={this.handleNameChange} />
        <WelcomeMessage name={this.state.name} />
      </>
    )
  }
}

export default AppContent
