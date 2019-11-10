import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

/**
 * To consume two or more different contexts,
 * we use Consumer and provide a child function that will 
 * receive the context updated value
 */
const WelcomeMessage = ({ name }) => {
  return (
    <ColorContext.Consumer>
      {
        color => (
          <LanguageContext.Consumer>
            { lang => {
              const message = lang === 'en'
                ? `Welcome ${name}!`
                : `Bem vindo ${name}!`

              return name ? <p style={{color: color}}>{message}</p> : null
            }}
          </LanguageContext.Consumer>
        )
      }
    </ColorContext.Consumer>
  )
}

export default WelcomeMessage
