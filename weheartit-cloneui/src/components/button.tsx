import React from 'react'
import { ButtonDefault } from '../styles/components/Button/button'

interface IButtonItem {
  classUse: string
}

interface IButton {
  classes: Array<IButtonItem>
}

const Button: React.FC<IButton> = props => {
  const classes = props.classes.map(classe => {
    return classe.classUse
  })
  return (
    <ButtonDefault className={classes.join(' ')}>
      {props?.children}
    </ButtonDefault>
  )
}

export default Button
