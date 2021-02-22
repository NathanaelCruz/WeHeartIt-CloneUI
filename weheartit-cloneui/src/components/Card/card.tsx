import React from 'react'
import {
  CardDefault,
  CardLinkAuthor,
  CardProfile,
  CardThumb,
  CardThumbImage,
  CardFooter,
  CardContent
} from '../../styles/components/Card/card'
import ButtonDefault from '../button'

interface ICardAuthor {
  profile: string
  name: string
}

interface ICard {
  thumb: string
  title: string
  description: string
  avaliation: number
  author: Array<ICardAuthor>
}

const Card: React.FC<ICard> = props => {
  const descriptionFormated = description => {
    if (description.length < 100) {
      return description
    } else {
      return description.substr(0, 100) + ' ...'
    }
  }

  const heatersFormated = heaters => {
    console.log(heaters < 1000)
    if (heaters < 1000) {
      return heaters
    } else {
      return parseFloat((heaters / 1000).toFixed(1)).toString() + 'K'
    }
  }

  return (
    <CardDefault>
      <CardThumb>
        <CardThumbImage src={props.thumb} alt={props.title}></CardThumbImage>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__boxShadow' },
            { classUse: 'u-btn__textLight' },
            { classUse: 'u-btn__wf95' },
            { classUse: 'u-btn__p05' },
            { classUse: 'u-btn__flexAround' },
            { classUse: 'u-btn__font1' }
          ]}
        >
          🔥 {heatersFormated(props.avaliation)} HEARTS
        </ButtonDefault>
        <CardProfile
          src={props.author[0].profile}
          alt={props.author[0].name}
        ></CardProfile>
      </CardThumb>
      <CardContent>
        <h4>{props.title}</h4>
        <p>{descriptionFormated(props.description)}</p>
      </CardContent>
      <CardFooter>
        <ButtonDefault
          classes={[
            { classUse: 'u-btn__bgTransparent' },
            { classUse: 'u-btn__textPrimary' }
          ]}
        >
          {'Saiba mais >'}
        </ButtonDefault>
        <CardLinkAuthor>por @{props.author[0].name}</CardLinkAuthor>
      </CardFooter>
    </CardDefault>
  )
}
export default Card
