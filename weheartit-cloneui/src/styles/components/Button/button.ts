import styled from 'styled-components'

export const ButtonDefault = styled.button`
  padding: 0.8em;
  border: none;
  outline: none;
  border-radius: 0.2em;
  ${props => props.theme.orientation.flex}
  position: relative;
  text-align: center;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    height: 100%;
    width: auto;
  }

  &.u-btn__font1 {
    font-size: 1em;
  }

  &.u-btn__textPrimary {
    color: ${props => props.theme.colors.primary};
  }

  &.u-btn__textLight {
    color: ${props => props.theme.colors.textLinkHover};
  }

  &.u-btn__textCenter {
    ${props => props.theme.orientation.flexCenter}
  }

  &.u-btn__bgTransparent,
  &.u-btn__bgTransparentHover {
    background-color: transparent;
  }

  &.u-btn__bgTransparentHover {
    padding: 0.9em 0.5em;
  }

  &.u-btn__bgTransparentHover:hover {
    background-color: ${props => props.theme.colors.bgContent};
  }

  &.u-btn__imgDefault img {
    height: 2.4em;
  }

  &.u-btn__imgProfile {
    ${props => props.theme.orientation.flex}
    height: 90%;
    padding: 0.4em;

    img {
      border-radius: 50%;
    }
  }

  &.u-btn__menuWeHeartIt {
    padding: 0.9em;
    color: ${props => props.theme.colors.textLight};
  }

  &.u-btn__boxShadow {
    box-shadow: ${props => props.theme.colors.boxShadow};
  }

  &.u-btn__boxShadow:hover {
    box-shadow: ${props => props.theme.colors.boxShadowHover};
  }

  &.u-btn__bgPrimary {
    background: ${props => props.theme.colors.bgButtonGradient};
    color: ${props => props.theme.colors.background};
    font-size: 1.1em;
  }

  &.u-btn__bgSecundary {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    justify-content: center;
  }

  &.u-btn__h50 {
    height: 50%;
  }

  &.u-btn__h60 {
    height: 60%;
  }

  &.u-btn__h70 {
    height: 70%;
  }

  &.u-btn__h80 {
    height: 80%;
  }

  &.u-btn__h90 {
    height: 90%;
  }

  &.u-btn__h100 {
    height: 100%;
  }

  &.u-btn__mt1 {
    margin-top: 1em;
  }
  &.u-btn__mLR10 {
    margin: 0 1em;
  }

  &.u-btn__w80 {
    width: 80%;
  }

  &.u-btn__w100 {
    width: 100%;
  }

  &.u-btn__wf95 {
    width: 9.5em;
  }

  &.btn__ptb09 {
    padding-top: 0.4em;
    padding-bottom: 0.4em;
  }

  &.u-btn__p12 {
    padding: 1.2em;
  }

  &.u-btn__p05 {
    padding: 0.5em;
  }

  &.u-btn__flexAround {
    justify-content: space-around;
  }
`
